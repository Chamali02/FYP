import React from 'react'
import Navbar from '../components/Header'
import HeroHome from '../components/Hero/HomeHero'
import HeroSpacer from '../components/Hero/HeroSpacer'
import HeroCategory from '../components/Hero/HeroCategory'
import Service from './Service'
import FAQ, { Faqs } from './Faq';
import Footer from '../components/footer'

function Home() {
  return (
    <>
    <Navbar />
    <HeroHome/>
    <HeroSpacer/>
    <HeroCategory/>
    <HeroSpacer/>
    <Service/>
    <HeroSpacer/>
    <FAQ items={Faqs}/>
    <Footer/>
    
    </>
  )
}

export default Home


