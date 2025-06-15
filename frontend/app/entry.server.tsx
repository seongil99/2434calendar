import type { AppLoadContext, EntryContext } from "react-router";
import { ServerRouter } from "react-router";
import { isbot } from "isbot";
import * as ReactDOMServer from "react-dom/server";

export const streamTimeout = 5_000;

// Detect if we're running in Bun or Node.js environment
const isBunRuntime = typeof (globalThis as any).Bun !== "undefined";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
  loadContext: AppLoadContext
) {
  return new Promise(async (resolve, reject) => {
    try {
      let userAgent = request.headers.get("user-agent");
      let waitForAllContent = (userAgent && isbot(userAgent)) || routerContext.isSpaMode;

      responseHeaders.set("Content-Type", "text/html");

      // Use different rendering strategies based on runtime
      if (isBunRuntime) {
        // Bun runtime - use renderToReadableStream
        const stream = await ReactDOMServer.renderToReadableStream(
          <ServerRouter context={routerContext} url={request.url} />,
          {
            onError(error: unknown) {
              responseStatusCode = 500;
              console.error(error);
            },
          }
        );

        if (waitForAllContent) {
          await stream.allReady;
        }

        resolve(
          new Response(stream, {
            headers: responseHeaders,
            status: responseStatusCode,
          })
        );
      } else {
        // Node.js runtime - use renderToPipeableStream with dynamic imports
        const [
          { renderToPipeableStream },
          { createReadableStreamFromReadable },
          { PassThrough }
        ] = await Promise.all([
          import("react-dom/server"),
          import("@react-router/node"),
          import("node:stream")
        ]);

        const { pipe, abort } = renderToPipeableStream(
          <ServerRouter context={routerContext} url={request.url} />,
          {
            onShellReady() {
              const body = new PassThrough();

              responseHeaders.set("Content-Type", "text/html");

              resolve(
                new Response(createReadableStreamFromReadable(body), {
                  headers: responseHeaders,
                  status: responseStatusCode,
                })
              );

              pipe(body);
            },
            onShellError(error: unknown) {
              reject(error);
            },
            onError(error: unknown) {
              responseStatusCode = 500;
              console.error(error);
            },
          }
        );

        setTimeout(abort, streamTimeout);
      }
    } catch (error) {
      reject(error);
    }
  });
}
