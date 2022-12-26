import React from 'react'
import Header from '../Common/Header'
import AboutSection from './About/AboutSection'
import TabSection from './Services/TabSection'

const About = () => {
  const content = {
    img: 'codeBox.jpg',
    imgAlt: 'Alternative Text', 
    title: 'About', 
    desc: 'This is additional text'
  }
  return (
    <>
      <Header content = {content} />
      <AboutSection /> 
    </>
  )
}

export default About