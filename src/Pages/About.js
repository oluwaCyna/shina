import React from 'react'
import Header from '../Common/Header'
import AboutSection from './About/AboutSection'

const About = () => {
  const content = {
    img: 'codeBox.jpg',
    imgAlt: 'Alternative Text', 
    title: 'This is the heading', 
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