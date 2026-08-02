import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="p-2">
    <h1 id='headings'>Welcome to Contact!</h1>
  </div>
}
