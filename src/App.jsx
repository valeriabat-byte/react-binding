import { useState } from 'react'
import Header from './assets/components/layout/Header'
import MainContent from './assets/components/layout/MainContent'
import Footer from './assets/components/layout/Footer'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

