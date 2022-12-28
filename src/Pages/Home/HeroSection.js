import React from "react";
import { Link } from "react-router-dom";
import heroStyle from "./herosection.module.css";

function HeroSection() {
 
    let TxtRotate = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = "";
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
      
        var that = this;
        var delta = 300 - Math.random() * 100;
      
        if (this.isDeleting) {
          delta /= 2;
        }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }
      
        setTimeout(function () {
          that.tick();
        }, delta);
      };
      
      window.onload = function () {
        var elements = document.getElementsByClassName("txt-rotate");
        for (var i = 0; i < elements.length; i++) {
          var toRotate = elements[i].getAttribute("data-rotate");
          var period = elements[i].getAttribute("data-period");
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
      };

  return (
    <>
      <div className={`container ${heroStyle.heroSection}`}>
        <div className={heroStyle.mainSection}>
          <div className={heroStyle.columnOne}>
            <h1>Hello,</h1>
            <h1>My name is Shina A.</h1>
            <h1>I develop <span class="txt-rotate" data-period="2000" data-rotate='[ "Websites.", "Web Applications.", "Softwares." ]'></span></h1>
            {/* <p>I'm a Full Stack Developer who uses PHP, Laravel, API, JavaScript, ReactJS, HTML, CSS, Tailwind CSS and Bootstrap technology to achieve goals and objectives.
              I will bring your vision to life and create action-focused designs making your users' experience smoother.
            </p> */}
            <p>
              With over <b>180 hours</b> of work on <b>Upwork</b>, I was chosen and given the <b>Top Rated Badge</b> to represent the top 10% of performers on the platform. 
              I will bring your vision to life and create action-focused designs making your users' experience smoother.
            </p>
            <div className={heroStyle.heroButtonGroup}>
              <Link to={"contact"} className={"btn primary-btn"}>
                Request Quote
              </Link>
              <Link to={"contact"} className={"btn secondary-btn"}>
                Discovery Call
              </Link>
            </div>
          </div>
          <div className={heroStyle.columnTwo}>
            <img src={"/AQP.png"} height={200} width={200} />
          </div>
        </div>
        <div className={heroStyle.logos}>
          <img
            src={"/clients-logo/bettinggods.png"}
            alt={"Betting Gods"}
          />
          <img 
            src={"/clients-logo/upwork.png"}
            alt={"Upwork"} 
          />
          <img
            src={"/clients-logo/RG_Heart.png"}
            alt={"Radical Grief"}
          />
          <img
            src={"/clients-logo/oregonsci.png"}
            alt={"Oregon Spinal Cord Injury connection"}
          />
          <img 
            src={"/clients-logo/therba.png"} 
            alt={"The RBA"} 
          />
          <img
            src={"/clients-logo/RHFH.png"}
            alt={"Ronnie House For Hope"}
          />
        </div>
      </div>
      <hr className="container spacer" />
    </>
  );
}

export default HeroSection;
