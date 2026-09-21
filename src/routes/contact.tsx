import { createFileRoute } from '@tanstack/react-router'
import ContactForm from '#/components/ContactForm'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: 'Contact' }],
  })
})

function RouteComponent() {
  return <div className="p-2">
    <h1 id='headings'>Welcome to Contact!</h1>
    <ContactForm />
  </div>
}