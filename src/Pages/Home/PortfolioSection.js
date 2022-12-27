import React from 'react'
import { Link } from "react-router-dom";
import porfolioStyle from "./portfoliosection.module.css";

const PortfolioSection = () => {
  return (
    <div className={porfolioStyle.portfolioSection}>
    <div className={`container ${porfolioStyle.portfolioSectionSpace}`}>
    <div className={porfolioStyle.heading}>
        <h5>PAST WORKS AND PROJECTS</h5>
        <h2>Portfolio</h2>
    </div>
        <p>My clients range from start-ups to 8-figure businesses<br /> that sell products or services online.</p>
        <Link to={'portfolio'} className={'btn primary-btn'}>View projects</Link>
    </div>
    {/* <hr className="container spacer" /> */}
    </div>
  )
}

export default PortfolioSection