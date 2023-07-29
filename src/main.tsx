import { render } from 'preact';
import { App } from './app.tsx'
import { Card } from './components/Card.tsx';
// import '../dist/styles.css'
import './tailwind-entry.css'

render(<App />, document.getElementById('app')!)

// export default App;

