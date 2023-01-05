import React from 'react'
import { Link } from "react-router-dom";
import Header from '../../Common/Header'
import singlePorfolioStyle from './singleportfolio.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function Resturant() {
const content = {
    img: '/singleportfolio.jpg',
    imgAlt: 'Single Portfolio Header', 
    title: 'Resturant Food Point', 
    desc: ''
    }
  return (
    <div>
      <Header content = {content} />
        <div>
            <div className={`container ${singlePorfolioStyle.container}`}>
            <div className={singlePorfolioStyle.mainContainer}>
                <div className={singlePorfolioStyle.colOne}>
                <img src={ '/fooddelivery/1.png' } alt={'Resturant Food Point'} className={singlePorfolioStyle.headerImg} />
                <img src={ '/fooddelivery/2.png' } alt={'Resturant Food Point'} className={singlePorfolioStyle.headerImg} />
                <img src={ '/fooddelivery/3.png' } alt={'Resturant Food Point'} className={singlePorfolioStyle.headerImg} />
                <img src={ '/fooddelivery/4.png' } alt={'Resturant Food Point'} className={singlePorfolioStyle.headerImg} />
                <img src={ '/fooddelivery/5.png' } alt={'Resturant Food Point'} className={singlePorfolioStyle.headerImg} />
                <img src={ '/fooddelivery/6.png' } alt={'Resturant Food Point'} className={singlePorfolioStyle.headerImg} />
                <img src={ '/fooddelivery/7.png' } alt={'Resturant Food Point'} className={singlePorfolioStyle.headerImg} />
                <img src={ '/fooddelivery/8.png' } alt={'Resturant Food Point'} className={singlePorfolioStyle.headerImg} />
                <img src={ '/fooddelivery/9.png' } alt={'Resturant Food Point'} className={singlePorfolioStyle.headerImg} />

                </div>

                <div className={singlePorfolioStyle.colTwo}>
                    <div>
                        <div className={singlePorfolioStyle.heading}>
                            <h2>Website Design</h2>
                            <div className={singlePorfolioStyle.hrDiv}><hr /></div>
                        </div>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <Link to={'/'}><FontAwesomeIcon icon={faArrowRightLong} className={singlePorfolioStyle.arrow} size='2x'/></Link>
                    </div>

                    <div>
                        <div className={singlePorfolioStyle.heading}>
                            <h2>Website Design</h2>
                            <div className={singlePorfolioStyle.hrDiv}><hr /></div>
                        </div>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <Link to={'/'}><FontAwesomeIcon icon={faArrowRightLong} className={singlePorfolioStyle.arrow} size='2x'/></Link>
                    </div>

                    <div>
                        <div className={singlePorfolioStyle.heading}>
                            <h2>Website Design</h2>
                            <div className={singlePorfolioStyle.hrDiv}><hr /></div>
                        </div>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <Link to={'/'}><FontAwesomeIcon icon={faArrowRightLong} className={singlePorfolioStyle.arrow} size='2x'/></Link>
                    </div>
                </div>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Resturant