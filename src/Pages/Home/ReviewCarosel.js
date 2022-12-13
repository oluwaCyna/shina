import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function ReviewCarosel() {
  return (
    <>
        <Carousel showStatus={false} showThumbs={false}>
                <div>
                    <img src={'/reviews/1.png'} height={300} alt={'Upwork reviews'} />
                </div>
                <div>
                    <img src={'/reviews/2.png'} height={300} alt={'Upwork reviews'} />
                </div>
                <div>
                    <img src={'/reviews/3.png'} height={300} alt={'Upwork reviews'} />
                </div>
                <div>
                    <img src={'/reviews/4.png'} height={300} alt={'Upwork reviews'} />
                </div>
                <div>
                    <img src={'/reviews/5.png'} height={300} alt={'Upwork reviews'} />
                </div>
                <div>
                    <img src={'/reviews/6.png'} height={300} alt={'Upwork reviews'} />
                </div>
                <div>
                    <img src={'/reviews/7.png'} height={300} alt={'Upwork reviews'} />
                </div>
                <div>
                    <img src={'/reviews/8.png'} height={300} alt={'Upwork reviews'} />
                </div>
                <div>
                    <img src={'/reviews/9.png'} height={300} alt={'Upwork reviews'} />
                </div>
            </Carousel>
    </>
  )
}

export default ReviewCarosel