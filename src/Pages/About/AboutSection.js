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
            name: 'Bootstrap'
        },
        {
            id: 4,
            name: 'Javascript'
        },
        {
            id: 5,
            name: 'ReactJS'
        },
        {
            id: 6,
            name: 'API'
        },
        {
            id: 7,
            name: 'PHP'
        },
        {
            id: 8,
            name: 'Laravel'
        },
        {
            id: 9,
            name: 'API'
        },
        {
            id: 10,
            name: 'MySQL'
        },
        {
            id: 11,
            name: 'MongoDB'
        },
        {
            id: 12,
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
          </div>
        </div>
        <div className={aboutStyle.rowTwo}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>

      <div className={aboutStyle.stackSection}>
        <div className={aboutStyle.heading}>
            <h2>STACKS</h2>
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
