import { render } from 'preact';
import { App } from './app.tsx'
import { Card } from './components/Card.tsx';
import '../dist/styles.css'

render(<Card description='test' title='orange' />, document.getElementById('app')!)

// export default App;

