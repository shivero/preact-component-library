import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import { Card } from './components/Card'
import "../dist/styles.css"
export function App() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1);
  // You can also pass a callback to the setter
  const decrement = () => setCount((currentCount) => currentCount - 1);
  return (
    <>
      <div className="container mx-auto">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
        <h1>Vite + Preact</h1>
        <div class="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/app.tsx</code> and save to test HMR
          </p>
        </div>
        <p class="read-the-docs">
          Click on the Vite and Preact logos to learn more
        </p>
        <Card title="Hello Vite + Preact" description="Count is {count}"></Card>
      </div>
    </>
  )
}
