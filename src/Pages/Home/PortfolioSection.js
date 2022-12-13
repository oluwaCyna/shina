import React from 'react'
import { Link } from "react-router-dom";
import porfolioStyle from "./portfoliosection.module.css";

const PortfolioSection = () => {
  return (
    <div className={porfolioStyle.portfolioSection}>
    <div className={`container ${porfolioStyle.portfolioSectionSpace}`}>
        <h4>PAST WORKS AND PROJECTS</h4>
        <h2>Portfolio</h2>
        <p>My clients range from start-ups to 8-figure businesses<br /> that sell products or services online.</p>
        <Link to={'porfolio'} className={'btn primary-btn'}>View projects</Link>
    </div>
    </div>
  )
}

export default PortfolioSection