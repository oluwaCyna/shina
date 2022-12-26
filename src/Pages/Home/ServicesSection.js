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
      icon: "faLaptopCode",
      title: "Basic Website Design - No Code",
      desc: "Reproduced a website UI mock up for a Real Estate Agent.",
    },
    {
      id: 2,
      icon: "faLaptopCode",
      title: "Advanced Website Design - Little/No Code",
      desc: "Reproduced a website UI mock up for a Real Estate Agent.",
    },
    {
      id: 3,
      icon: "faLaptopCode",
      title: "Custom Solutions with Code",
      desc: "Reproduced a website UI mock up for a Real Estate Agent.",
    },
    // {
    //   id: 4,
    //   icon: "faLaptopCode",
    //   title: "API development and management",
    //   desc: "Reproduced a website UI mock up for a Real Estate Agent.",
    // },
    // {
    //   id: 5,
    //   icon: "faLaptopCode",
    //   title: "Basic CMS website development",
    //   desc: "Reproduced a website UI mock up for a Real Estate Agent.",
    // },
    // {
    //   id: 6,
    //   icon: "faLaptopCode",
    //   title: "Advanced CMS website development",
    //   desc: "Reproduced a website UI mock up for a Real Estate Agent.",
    // },
    // {
    //   id: 7,
    //   icon: "faLaptopCode",
    //   title: "Custom development on Wordpress",
    //   desc: "Reproduced a website UI mock up for a Real Estate Agent.",
    // },
    // {
    //   id: 8,
    //   icon: "faLaptopCode",
    //   title: "Custom development on Wix",
    //   desc: "Reproduced a website UI mock up for a Real Estate Agent.",
    // },
    // {
    //   id: 9,
    //   icon: "faLaptopCode",
    //   title: "Custom development on Webflow",
    //   desc: "Reproduced a website UI mock up for a Real Estate Agent.",
    // },
    // {
    //   id: 10,
    //   icon: "faLaptopCode",
    //   title: "Ecommerce website development",
    //   desc: "Reproduced a website UI mock up for a Real Estate Agent.",
    // },
    // {
    //   id: 11,
    //   icon: "faLaptopCode",
    //   title: "Marketplace website development",
    //   desc: "Reproduced a website UI mock up for a Real Estate Agent.",
    // },
    // {
    //   id: 12,
    //   icon: "faLaptopCode",
    //   title: "Mobile application development",
    //   desc: "Reproduced a website UI mock up for a Real Estate Agent.",
    // },
  ];

  return (
    <div className={'container'}>
    <div className={servicesStyle.servicesSection}>
      <h4>WHAT I DO</h4>
      <h2>Services</h2>
      <p>
        My clients range from start-ups to 8-figure businesses
        <br /> that sell products or services online.
      </p>
      <div className={servicesStyle.serviceBoxContainer}>
        {services.map((service) => (
          <ServiceCard key={service.id} serv={service} />
        ))}
      </div>
      <Link to={"porfolio"} className={"btn primary-btn"}>
        View projects
      </Link>
    </div>
    <hr className="container spacer" />
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
          icon={faLaptopCode}
          className={servicesStyle.icon}
        />
        <h2>{props.serv.title}</h2>
      </div>
    </div>
  );
};

export default ServicesSection;
