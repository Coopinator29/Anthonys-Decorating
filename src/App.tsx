import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import { ServiceAreaMap } from './components/ServiceAreaMap'
import { QuoteWizard } from './components/QuoteForm'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="bg-custom-blue text-offwhite min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />


        <section id="portfolio" className="container mx-auto py-16">
          <Portfolio />
        </section>

        <section id="service-area" className="container mx-auto py-16">
          <ServiceAreaMap />
        </section>

        <section id="quote" className="container mx-auto py-16">
          <QuoteWizard />
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