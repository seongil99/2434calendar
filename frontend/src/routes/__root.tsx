import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <a href="/" className="[&.active]:font-bold">Home</a>
        <a href="/about" className="[&.active]:font-bold">About</a>
        <a href="/posts" className="[&.active]:font-bold">Posts</a>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
