import React from 'react'
import Header from '../Common/Header'
import ServiceOne from './Services/ServiceOne'
import ServiceThree from './Services/ServiceThree'
import ServiceTwo from './Services/ServiceTwo'

const Services = () => {
  const content = {
    img: 'services.jpg',
    imgAlt: 'Service Header', 
    title: 'Services', 
    desc: ''
  }
  return (
    <div>
      <Header content = {content} />
      <div className='container'>
        <ServiceOne />
        <ServiceTwo />
        <ServiceThree />
      </div>

    </div>
  )
}

export default Services