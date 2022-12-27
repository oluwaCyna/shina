import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import testimonialStyle from "./reviewcarosel.module.css";

function ReviewCarosel() {
  const reviews = [
    {
      id: 1,
      text: "Quick and effective WordPress website tweaks. I use Shina frequently and he does good work every time.",
      name: "Sarah Markel",
      title: "RBA",
    },
    {
      id: 2,
      text: "Shina is quick, dependable quality communicates well, and is patient with feedback. I would highly recommend him for Wix web design. I've contracted Shina for several projects. He is dependable, quick, and communicative. I would highly recommend him for website design.",
      name: "Melissa Lunardini",
      title: "",
    },
    {
      id: 3,
      text: "I'd happily work with Shina again!",
      name: "Jasmin Shah",
      title: "Reintroducing America",
    },
    {
      id: 4,
      text: "Shina was an ABSOLUTE PLEASURE to work with. He totally redesigned my website and EXCEEDED my expectations. He was very easy to talk to and was open to new ideas. There were a few times when I went back and forth on my decisions and he made changes without any resistance or judgment. He will DEFINITELY be my 'go-to' person moving forward!! And his rates are very reasonable. Job Well Done, Shina!!.",
      name: "Dedra Lavallais",
      title: "",
    },
    {
      id: 5,
      text: "The task was completed very quickly and successfully. Shina responded immediately and was very easy to work with. I re-hired him the next day for another project and look forward to working with him long-term.",
      name: "Imman Vanier",
      title: "",
    },
    {
      id: 6,
      text: "He was very quick and available to help me with my Wordpress needs. I appreciated his honesty and patience!",
      name: "Dan Staub",
      title: "Juniper Growth",
    },
    {
      id: 7,
      text: "Shina was a pleasure to work with. Fast response time, honest feedback and very professional. He does a great job at executing your vision and making it come to life. I would highly recommend him for anyone especially if you are on a time restraint! I can’t wait to complete future projects with him",
      name: "Lovetta Pompee",
      title: "",
    },
    {
      id: 8,
      text: "Shina was a pleasure to partner with. He took a vision and made it a reality. He's responsive to questions and reaches out for feedback. Job was completed ahead of schedule and he's competitively priced. Will use for future projects!",
      name: "Shameka Andre",
      title: "",
    },
  ];
  return (
    <div className={testimonialStyle.containerBg}>
      <div className="container">
        <div className={testimonialStyle.testimonialSection}>
          <div className={testimonialStyle.heading}>
            <h5>WHAT MY PREVIOUS CLIENTS HAS TO SAY ABOUT MY SERVICE</h5>
            <h2>Testimonial</h2>
          </div>
          <Carousel showStatus={false} showThumbs={false} className={testimonialStyle.carousel}>
            {reviews.map((review) => (
              <div className={testimonialStyle.testimonial} key={review.id}>
                <p>"{review.text}"</p>
                <div className={testimonialStyle.name}>
                  <h3>{review.name}</h3>
                  <p>{review.title}</p>
                </div>
              </div>
            ))}
          </Carousel>
          <a href={"https://upwork.com/freelancers/~019596c9284cd15377"} target='_blank' className={"btn primary-btn"}>
            SEE ALL
          </a>
        </div>
        <hr className="container spacer" />
      </div>
    </div>
  );
}

export default ReviewCarosel;
