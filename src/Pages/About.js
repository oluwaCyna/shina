import React from 'react'
import Header from '../Common/Header'
import AboutSection from './About/AboutSection'
import TabSection from './Services/TabSection'

const About = () => {
  const content = {
    img: 'about.jpg',
    imgAlt: 'About Header', 
    title: 'About', 
    desc: ''
  }
  return (
    <>
      <Header content = {content} />
      <AboutSection /> 
    </>
  )
}

export default About