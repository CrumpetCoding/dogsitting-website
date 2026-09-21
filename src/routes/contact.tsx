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
    <h1 id='headings'>Contact Us</h1>
    <ContactForm />
  </div>
}