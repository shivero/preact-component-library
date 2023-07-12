import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import { Card } from './components/Card'

import './tailwind-entry.css'

export function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="">
        <Card title="Dbamy o Twoją prywatność" description="Dzięki plikom cookies i technologiom pokrewnym oraz przetwarzaniu Twoich danych, możemy zapewnić, że dopasujemy do Ciebie wyświetlane treści.
Wyrażając zgodę na przechowywanie informacji na urządzeniu końcowym lub dostęp do nich i przetwarzanie danych (w tym w obszarze profilowania, analiz rynkowych i statystycznych) sprawiasz, że łatwiej będzie odnaleźć Ci w Allegro dokładnie to, czego szukasz i potrzebujesz.
Administratorem Twoich danych będzie Allegro oraz niektórzy partnerzy, z którymi współpracujemy."></Card>
      </div>
    </>
  )
}
