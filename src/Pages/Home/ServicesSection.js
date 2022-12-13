import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
// import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import servicesStyle from "./servicessection.module.css";

const ServicesSection = () => {

    const services = [
        {
        id: 1,
        icon : 'faLaptopCode',
        title: 'Full stack developer',
        desc: 'Reproduced a website UI mock up for a Real Estate Agent.'
    },
    {
        id: 2,
        icon : 'faLaptopCode',
        title: 'Full stack developer',
        desc: 'Reproduced a website UI mock up for a Real Estate Agent.'
    },
    {
        id: 3,
        icon : 'faLaptopCode',
        title: 'Full stack developer',
        desc: 'Reproduced a website UI mock up for a Real Estate Agent.'
    },
    ]

  return (
    <div className={`container ${servicesStyle.servicesSection}`}>
      <h4>PAST WORKS AND PROJECTS</h4>
      <h2>Portfolio</h2>
      <p>
        My clients range from start-ups to 8-figure businesses
        <br /> that sell products or services online.
      </p>
      <div className={servicesStyle.serviceBoxContainer}>
        {services.map((service) => <ServiceCard key={service.id} serv={service} /> )}  
      </div>
      <Link to={"porfolio"} className={"btn primary-btn"}>
        View projects
      </Link>
    </div>
  );
};

const ServiceCard = (props) => {
  return (
    <div className={servicesStyle.projectCard}>
          <div className={servicesStyle.face1}>
            <div className={servicesStyle.content}>
              <p>{props.serv.desc}</p>
            </div>
          </div>
          <div className={`${servicesStyle.face} ${servicesStyle.face2}`}>
            <FontAwesomeIcon
              icon={props.serv.icon}
              className={servicesStyle.icon}
            />
            <h2>{props.serv.title}</h2>
          </div>
        </div>
  )
}


export default ServicesSection;
