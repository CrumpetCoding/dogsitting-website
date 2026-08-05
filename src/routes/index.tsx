import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '#/components/HeroSection'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <HeroSection />
      <h1 id="headings">Welcome Home!</h1>
    </>
  )
}