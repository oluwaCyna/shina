import React from "react";
import aboutStyle from "./aboutsection.module.css";
import 'animate.css';

const AboutSection = () => {
    const stacks = [
        {
            id: 1,
            name: 'HTML'
        },
        {
            id: 2,
            name: 'CSS'
        },
        {
            id: 3,
            name: 'Sass'
        },
        {
            id: 4,
            name: 'Bootstrap'
        },
        {
            id: 5,
            name: 'Javascript'
        },
        {
            id: 6,
            name: 'JQuery'
        },
        {
            id: 7,
            name: 'ReactJS'
        },
        {
            id: 8,
            name: 'Redux'
        },
        {
            id: 9,
            name: 'PHP'
        },
        {
            id: 10,
            name: 'Laravel'
        },
        {
            id: 11,
            name: 'API'
        },
        {
            id: 12,
            name: 'MySQL'
        },
        {
            id: 13,
            name: 'MongoDB'
        },
        {
            id: 14,
            name: 'Git/Github'
        },
    ]
  return (
    <div className="container">
      <div className={aboutStyle.aboutSection}>
        <div className={aboutStyle.rowOne}>
          <div className={aboutStyle.rowOneOne}>
            <img src={"/use.jpg"} alt={'Dummy'} />
          </div>
          <div className={aboutStyle.rowOneTwo}>
          I am a full-stack developer, I have a strong foundation in both front-end and back-end web development.

        I have experience working with a variety of website development technologies and libraries, including HTML, CSS, Sass, Bootstraps, JavaScript, jQuery and Redux.

        I am proficient in frameworks such as React, and Laravel, and I have a strong understanding of database management and server-side technologies.<br /><br />

        In addition to my technical skills, I am a strong problem-solver and a proactive learner. I enjoy tackling complex challenges and finding creative solutions, and I am always looking to expand my knowledge and skill set.

        I am a team player and thrive in collaborative environments. I have excellent communication skills and am comfortable working with cross-functional teams to deliver high-quality products.
          </div>
        </div>
        {/* <div className={aboutStyle.rowTwo}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </div> */}
      </div>

      <div className={aboutStyle.stackSection}>
        <div className={aboutStyle.heading}>
            <h3>STACKS</h3>
            <div className={aboutStyle.hrDiv}><hr /></div>
        </div>
        <div className={aboutStyle.stackList}>
            {stacks.map((stack) => 
            <div key={stack.id} className={`${aboutStyle.stackCard} animate__bounceIn`}>
                <h2>{stack.name}</h2>
            </div>)}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
