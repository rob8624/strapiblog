// routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import { testStrapiConnection } from '@/data/strapi-data'

export const Route = createFileRoute('/')({
  loader: () => testStrapiConnection(), // call it directly in the loader
  component: App,
})

function App() {
  const data = Route.useLoaderData()

  return (
    <div className="text-black">
      <h1>Testing Strapi Connection</h1>
      <p><strong>API URL:</strong> {data.envUrl}</p>
      <p><strong>Has Data:</strong> {String(data.hasData)}</p>
      <pre>{JSON.stringify(data.raw, null, 2)}</pre>
    </div>
  )
}