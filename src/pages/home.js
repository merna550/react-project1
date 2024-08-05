import React from 'react'
import Hero from '../components/hero';
import Intro from '../components/intro';
import Services from '../components/services';
import Portfolio from '../components/portfolio';
import Clients from '../components/clients';
import Cta from '../components/cta';
import Footer from '../components/footer';

function Home() {
  return (
    <>
      <div>
        <Hero />
        <Intro />
        <Services />
        <Portfolio />
        <Clients />
        <Cta />
        <Footer />
      </div>

    </>
  )
}

export default Home;