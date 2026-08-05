import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
    component: About,
})

function About() {
    return <div className="p-2">
        <h1 id='headings'>Welcome to Services!</h1>
    </div>
}