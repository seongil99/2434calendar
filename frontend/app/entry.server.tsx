import type { AppLoadContext, EntryContext } from "react-router";
import { ServerRouter } from "react-router";
import { isbot } from "isbot";
import { renderToReadableStream } from "react-dom/server";

export const streamTimeout = 5_000;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
  loadContext: AppLoadContext
  // If you have middleware enabled:
  // loadContext: unstable_RouterContextProvider
) {
  return new Promise(async (resolve, reject) => {
    try {
      let userAgent = request.headers.get("user-agent");

      // Ensure requests from bots and SPA Mode renders wait for all content to load before responding
      let waitForAllContent = (userAgent && isbot(userAgent)) || routerContext.isSpaMode;

      const stream = await renderToReadableStream(
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

      responseHeaders.set("Content-Type", "text/html");

      resolve(
        new Response(stream, {
          headers: responseHeaders,
          status: responseStatusCode,
        })
      );
    } catch (error) {
      reject(error);
    }
  });
}
