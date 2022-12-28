import React from 'react'
import { Link } from "react-router-dom";
import Header from '../Common/Header'
import porfolioStyle from './portfolio.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  const content = {
    img: 'portfolio.jpg',
    imgAlt: 'Portfolio Header', 
    title: 'Portfolio', 
    desc: ''
  }
  return (
    <div>
      <Header content = {content} />
      <div>
        <div className={`container ${porfolioStyle.container}`}>
          <div className={porfolioStyle.mainContainer}>
            <div className={porfolioStyle.colOne}>
              <img src={ '/ronnie/Thumbnail.png' } alt={'ronnieshouseforhope.org'} className={porfolioStyle.headerImg} />
            </div>

            <div className={porfolioStyle.colTwo}>
              <div className={porfolioStyle.heading}>
                <h2>ronnieshouseforhope.org</h2>
                <div className={porfolioStyle.hrDiv}><hr /></div>
              </div>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Link to={'/portfolio/ronnieshouseforhope'}><FontAwesomeIcon icon={faArrowRightLong} className={porfolioStyle.arrow} size='2x'/></Link>
            </div>
          </div>
          <hr className={porfolioStyle.hrLine}/>
        </div>
      </div>

      <div>
        <div className={`container ${porfolioStyle.container}`}>
          <div className={porfolioStyle.mainContainer}>
            <div className={porfolioStyle.colTwo}>
              <div className={porfolioStyle.heading}>
                <h2>theshina.com</h2>
                <div className={porfolioStyle.hrDiv}><hr /></div>
              </div>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Link to={'/portfolio/portfolio'}><FontAwesomeIcon icon={faArrowRightLong} className={porfolioStyle.arrow} size='2x'/></Link>
            </div>

            <div className={porfolioStyle.colOne}>
              <img src={ '/portfolio/Thumbnail.png' } alt={'theshina.com'} className={porfolioStyle.headerImg} />
            </div>
          </div>
          <hr className={porfolioStyle.hrLine} />
        </div>
      </div>
      
      <div>
        <div className={`container ${porfolioStyle.container}`}>
          <div className={porfolioStyle.mainContainer}>
            <div className={porfolioStyle.colOne}>
              <img src={ '/jasmin/Thumbnail.png' } alt={'jasminshah.com'} className={porfolioStyle.headerImg} />
            </div>

            <div className={porfolioStyle.colTwo}>
              <div className={porfolioStyle.heading}>
                <h2>jasminshah.com</h2>
                <div className={porfolioStyle.hrDiv}><hr /></div>
              </div>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Link to={'/portfolio/jasminshah'}><FontAwesomeIcon icon={faArrowRightLong} className={porfolioStyle.arrow} size='2x'/></Link>
            </div>
          </div>
          <hr className={porfolioStyle.hrLine} />
        </div>
      </div>

      <div>
        <div className={`container ${porfolioStyle.container}`}>
          <div className={porfolioStyle.mainContainer}>
            <div className={porfolioStyle.colTwo}>
              <div className={porfolioStyle.heading}>
                <h2>Resturant Food Point</h2>
                <div className={porfolioStyle.hrDiv}><hr /></div>
              </div>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Link to={'/portfolio/resturant'}><FontAwesomeIcon icon={faArrowRightLong} className={porfolioStyle.arrow} size='2x'/></Link>
            </div>

            <div className={porfolioStyle.colOne}>
              <img src={ '/resturant/Thumbnail.png' } alt={'Resturant Food Point'} className={porfolioStyle.headerImg} />
            </div>
          </div>
          <hr className={porfolioStyle.hrLine} />
        </div>
      </div>

      <div>
        <div className={`container ${porfolioStyle.container}`}>
          <div className={porfolioStyle.mainContainer}>
            <div className={porfolioStyle.colOne}>
              <img src={ '/ecare/Thumbnail.png' } alt={'Ecare- Hospital Managment App'} className={porfolioStyle.headerImg} />
            </div>

            <div className={porfolioStyle.colTwo}>
              <div className={porfolioStyle.heading}>
                <h2>Ecare- Hospital Managment App</h2>
                <div className={porfolioStyle.hrDiv}><hr /></div>
              </div>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Link to={'/portfolio/ecare'}><FontAwesomeIcon icon={faArrowRightLong} className={porfolioStyle.arrow} size='2x'/></Link>
            </div>
          </div>
          <hr className={porfolioStyle.hrLine} />
        </div>
      </div>

      <div>
        <div className={`container ${porfolioStyle.container}`}>
          <div className={porfolioStyle.mainContainer}>
            <div className={porfolioStyle.colTwo}>
              <div className={porfolioStyle.heading}>
                <h2>radicalgrief.org</h2>
                <div className={porfolioStyle.hrDiv}><hr /></div>
              </div>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Link to={'/portfolio/radicalgrief'}><FontAwesomeIcon icon={faArrowRightLong} className={porfolioStyle.arrow} size='2x'/></Link>
            </div>

            <div className={porfolioStyle.colOne}>
              <img src={ '/radical/Thumbnail.png' } alt={'radicalgrief.org'} className={porfolioStyle.headerImg} />
            </div>
          </div>
          <hr className={porfolioStyle.hrLine} />
        </div>
      </div>

      <div>
        <div className={`container ${porfolioStyle.container}`}>
          <div className={porfolioStyle.mainContainer}>
          <div className={porfolioStyle.colOne}>
              <img src={ '/avatour/Thumbnail.png' } alt={'avatour.co/press'} className={porfolioStyle.headerImg} />
            </div>

            <div className={porfolioStyle.colTwo}>
              <div className={porfolioStyle.heading}>
                <h2>avatour.co/press</h2>
                <div className={porfolioStyle.hrDiv}><hr /></div>
              </div>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Link to={'/portfolio/press'}><FontAwesomeIcon icon={faArrowRightLong} className={porfolioStyle.arrow} size='2x'/></Link>
            </div>
          </div>
          <hr className={porfolioStyle.hrLine} />
        </div>
      </div>

      <div>
        <div className={`container ${porfolioStyle.container}`}>
          <div className={porfolioStyle.mainContainer}>
            <div className={porfolioStyle.colTwo}>
              <div className={porfolioStyle.heading}>
                <h2>E-commerce Website</h2>
                <div className={porfolioStyle.hrDiv}><hr /></div>
              </div>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Link to={'/portfolio/ecommerce'}><FontAwesomeIcon icon={faArrowRightLong} className={porfolioStyle.arrow} size='2x'/></Link>
            </div>

            <div className={porfolioStyle.colOne}>
              <img src={ '/commerce/Thumbnail.png' } alt={'E-commerce Website'} className={porfolioStyle.headerImg} />
            </div>
          </div>
          <hr className={porfolioStyle.hrLine} />
        </div>
      </div>

    </div>
  )
}

export default Portfolio