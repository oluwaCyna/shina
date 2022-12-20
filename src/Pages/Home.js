import React from 'react'
import HeroSection from './Home/HeroSection'
import PortfolioSection from './Home/PortfolioSection'
import ReviewCarosel from './Home/ReviewCarosel'
import ServicesSection from './Home/ServicesSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <ReviewCarosel />
      <ServicesSection />
      <PortfolioSection />
    </>
  )
}

export default Home