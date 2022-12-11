import React from "react";
import { Link } from "react-router-dom";
import footerStyle from "./footer.module.css";
import "../App.css"

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.footerContainer}>
        <div className={footerStyle.footerSocial}>Social Icons</div>
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
            <h3>Section 2</h3>
          </div>
          <div className={footerStyle.footerSectionThree}>
            <h3>Section 3</h3>
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
