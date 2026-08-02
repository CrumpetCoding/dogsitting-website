import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="p-2">
    <h3>Welcome to Contact!</h3>
  </div>
}
