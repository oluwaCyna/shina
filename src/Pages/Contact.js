import React from 'react'
import Header from '../Common/Header'
import ContactDetails from './Contact/ContactDetails'
import ContactForm from './Contact/ContactForm'
import contactStyle from './contact.module.css';

const Contact = () => {
  const content = {
    img: 'codeBox.jpg',
    imgAlt: 'Alternative Text', 
    title: 'Contact', 
    desc: 'This is additional text'
  }
  
  return (
    <>
      <Header content = {content} />
      <div className={'container'}>
        <div className={contactStyle.row}>
        <div className={contactStyle.col}><ContactDetails /></div>
        <div className={contactStyle.col}><ContactForm /></div>
        </div>
      </div>
      
    </>
  )
}

export default Contact