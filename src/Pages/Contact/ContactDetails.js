import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import contactDetailsStyle from './contactdetails.module.css';

const ContactDetails = () => {
  return (
        <div className={contactDetailsStyle.contactList}>
        <hr />
          <div className={contactDetailsStyle.contactContainer}>
            <div className={contactDetailsStyle.contact}>
              <FontAwesomeIcon className={contactDetailsStyle.icon} icon={faEnvelope} fixedWidth size='3x' /> 
              <div className={contactDetailsStyle.contactDetails}>
                <h3>Email:</h3>
                <a href={'mailto:oluwashinaayomi2019@gmail.com'} target={'_blank'}>oluwashinaayomi2019@gmail.com</a>
              </div>
            </div>
            <hr />
          </div>

          <div className={contactDetailsStyle.contactContainer}>
            <div className={contactDetailsStyle.contact}>
              <FontAwesomeIcon className={contactDetailsStyle.icon} icon={faLinkedin} fixedWidth size='3x' /> 
              <div className={contactDetailsStyle.contactDetails}>
                <h3>Upwork:</h3>
                <a href={'https://www.upwork.com/freelancers/~019596c9284cd15377'} target={'_blank'}>Shina A.</a>
              </div>
            </div>
            <hr />
          </div>

          <div className={contactDetailsStyle.contactContainer}>
            <div className={contactDetailsStyle.contact}>
              <FontAwesomeIcon className={contactDetailsStyle.icon} icon={faLinkedin} fixedWidth size='3x' /> 
              <div className={contactDetailsStyle.contactDetails}>
                <h3>Linkedin:</h3>
                <a href={'https://www.linkedin.com/in/shinaa/'} target={'_blank'}>@shinaa</a>
              </div>
            </div>
            <hr />
          </div>

          <div className={contactDetailsStyle.contactContainer}>
            <div className={contactDetailsStyle.contact}>
              <FontAwesomeIcon className={contactDetailsStyle.icon} icon={faTwitter} fixedWidth size='3x' /> 
              <div className={contactDetailsStyle.contactDetails}>
                <h3>Twitter:</h3>
                <a href={'https://twitter.com/oluwaCyna'} target={'_blank'}>@oluwaCyna</a>
              </div>
            </div>
            <hr />
          </div>

          <div className={contactDetailsStyle.contactContainer}>
            <div className={contactDetailsStyle.contact}>
              <FontAwesomeIcon className={contactDetailsStyle.icon} icon={faInstagram} fixedWidth size='3x' /> 
              <div className={contactDetailsStyle.contactDetails}>
                <h3>Instagram:</h3>
                <a href={'https://www.instagram.com/oluwacyna//'} target={'_blank'}>@oluwacyna</a>
              </div>
            </div>
            <hr />
          </div>
        </div>
  )
}

export default ContactDetails