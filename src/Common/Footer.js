import React from "react";
import { Link } from "react-router-dom";
import footerStyle from "./footer.module.css";
import "../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.footerContainer}>
        <div className={footerStyle.footerSocial}>
            <h3>Where to find me</h3>
            <div className={footerStyle.footerSocialIcons}>
                <a href={'https://upwork.com/freelancers/~019596c9284cd15377'} data-tp={'Upwork'} target={'_blank'}><FontAwesomeIcon icon={faBuilding} /></a>
                <a href={'https://linkedin.com/in/shinaa/'} data-tp={'Linkedin'} target={'_blank'}><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href={'https://github.com/oluwaCyna'} data-tp={'Github'} target={'_blank'}><FontAwesomeIcon icon={faGithub} /></a>
                <a href={'https://instagram.com/oluwacyna/'} data-tp={'Instagram'} target={'_blank'}><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </div>
        <div className={footerStyle.footerSections}>
          <div className={footerStyle.footerSectionOne}>
            <h3>About Me</h3>
            <p>I am a Full Stack Developer.<br/> Wordpress, Wix, Webflow, Squarespace, Custom solutions with code</p>
            <div className={footerStyle.footerButtonGroup}>
              <Link to={'/'} className={'btn primary-btn'}>Request Quote</Link>
              <Link to={'/'} className={'btn secondary-btn'}>Discovery Call</Link>
            </div>
          </div>
          <div className={footerStyle.footerSectionTwo}>
            <h3>Quick links</h3>
            <div className={footerStyle.footerListGroup}>
                <Link to={'/'}><FontAwesomeIcon icon={faHandPointRight} /> Home</Link>
                <Link to={'about'}><FontAwesomeIcon icon={faHandPointRight} /> About</Link>
                <Link to={'portfolio'}><FontAwesomeIcon icon={faHandPointRight} /> Portfolio</Link>
                <Link to={'services'}><FontAwesomeIcon icon={faHandPointRight} /> Services</Link>
                <Link to={'contact'}><FontAwesomeIcon icon={faHandPointRight} /> Contact</Link>
            </div>
          </div>
          <div className={footerStyle.footerSectionThree}>
          <h3>Stacks</h3>
            <div className={footerStyle.footerListGroup}>
                <p><FontAwesomeIcon icon={faHandPointRight} /> HTML, CSS, Bootstrap, Tailwind CSS</p>
                <p><FontAwesomeIcon icon={faHandPointRight} /> Javascript, ReactJS, API</p>
                <p><FontAwesomeIcon icon={faHandPointRight} /> PHP, Laravel, API</p>
                <p><FontAwesomeIcon icon={faHandPointRight} /> MySQL, MongoDB</p>
                <p><FontAwesomeIcon icon={faHandPointRight} /> Custon wordpress, wix velo</p>
            </div>
          </div>
          <div className={footerStyle.footerSectionThree}>
          <h3>What I can do for you</h3>
            <div className={footerStyle.footerListGroup}>
                <p><FontAwesomeIcon icon={faHandPointRight} /> Basic Website Development</p>
                <p><FontAwesomeIcon icon={faHandPointRight} /> Custom/Advanced Website Development- cutsom wp, wix velo</p>
                <p><FontAwesomeIcon icon={faHandPointRight} /> Ecommerce Website Develoment</p>
                <p><FontAwesomeIcon icon={faHandPointRight} /> Marketplace Website Develoment</p>
                <p><FontAwesomeIcon icon={faHandPointRight} /> Custom Web Application Solutions</p>
            </div>
          </div>
        </div>
        <div className={footerStyle.footerNote}>
          c 2023. Designed and Developed with ReactJs by dev.Shina
        </div>
      </div>
    </footer>
  );
};

export default Footer;
