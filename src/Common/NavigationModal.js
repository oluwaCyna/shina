import React, {  } from "react";
import { Link } from "react-router-dom";
import modalStyle from './navigationModal.module.css';

const NavigationModal = (props) => {

  return (
    <div style={props.display} className={modalStyle.modal}>
      <div className={modalStyle.modalContent}>
        <span className={modalStyle.close} onClick={props.click}>&times;</span>
        <div className={modalStyle.nav}>
                <Link
                to="/"
                className={modalStyle.link}
                onClick={props.click}>
                Home
                </Link>
                <Link
                to="about"
                className={modalStyle.link}
                onClick={props.click}>
                About
                </Link>
                <Link
                to="portfolio"
                className={modalStyle.link}
                onClick={props.click}>
                Portfolio
                </Link>
                <Link
                to="services"
                className={modalStyle.link}
                onClick={props.click}>
                Services
                </Link>
                <Link
                to="contact"
                className={modalStyle.link}
                onClick={props.click}>
                Contact
                </Link>
            </div>
            <button className={modalStyle.btn}>
                Request Quote
            </button>
      </div>
    </div>
  );
};

export default NavigationModal;
