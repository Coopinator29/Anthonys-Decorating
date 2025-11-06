import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ServiceAreaMap from './components/ServiceAreaMap'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react"

const App: React.FC = () => {
  return (
    <div className="bg-custom-blue text-offwhite min-h-screen flex flex-col">
      <Analytics />
      <Header />
      <main className="flex-grow">
        <Hero />
        <section id="service-area" className="container mx-auto py-2 mt-4">
          <ServiceAreaMap />
        </section>

        <section id="contact" className="container mx-auto py-16">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App