import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts')({
  component: Posts,
})

function Posts() {
  return (
    <div className="p-2">
      <h3>Hello from Posts!</h3>
    </div>
  )
}
