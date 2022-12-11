import React from "react";
import { Link } from "react-router-dom";
import heroStyle from "./herosection.module.css";
import generalStyle from "../../App.css";
import ReviewCarosel from "./ReviewCarosel";

function HeroSection() {
  const Style = {
    margin: "0 auto",
    width: "50%",
  };
  return (
    <>
      <div className={`container ${heroStyle.heroSection}`}>
        <div className={heroStyle.mainSection}>
          <div className={heroStyle.columnOne}>
            <h2>Hi,</h2>
            <h2>I'm Mujeeb Shina Abdullateef.</h2>
            <h2>I develop websites</h2>
            <p>
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I'm not
              adding motion just to spruce things up, but doing it in ways that.
            </p>
            <div className={heroStyle.heroButtonGroup}>
              <Link to={"/"} className={"btn primary-btn"}>
                Request Quote
              </Link>
              <Link to={"/"} className={"btn secondary-btn"}>
                Discovery Call
              </Link>
            </div>
          </div>
          <div className={heroStyle.columnTwo}>
            <img src={"/use.jpg"} height={200} width={200} />
          </div>
        </div>
        <div className={heroStyle.logos}>
          <img
            src={"/clients-logo/bettinggods.png"}
            height={50}
            alt={"Betting Gods"}
          />
          <img src={"/clients-logo/upwork.png"} height={50} alt={"Upwork"} />
          <img
            src={"/clients-logo/RG_Heart.png"}
            height={50}
            alt={"Radical Grief"}
          />
          <img
            src={"/clients-logo/oregonsci.png"}
            height={50}
            alt={"Oregon Spinal Cord Injury connection"}
          />
          <img src={"/clients-logo/therba.png"} height={50} alt={"The RBA"} />
          <img
            src={"/clients-logo/RHFH.png"}
            height={50}
            alt={"Ronnie House For Hope"}
          />
        </div>
        <div className={heroStyle.review}>
          <ReviewCarosel />
        </div>
      </div>
      <hr className="container" />
    </>
  );
}

export default HeroSection;
