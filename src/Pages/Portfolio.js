import React from 'react'
import { Link } from "react-router-dom";
import Header from '../Common/Header'
import porfolioStyle from './portfolio.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  const content = {
    img: 'codeBox.jpg',
    imgAlt: 'Alternative Text', 
    title: 'Portfolio', 
    desc: 'This is additional text'
  }
  return (
    <div>
      <Header content = {content} />
      <div>
        {/* <div className={`container ${porfolioStyle.miniBox}`}></div>
        <hr className={porfolioStyle.hrLine} /> */}
        <div className={`container ${porfolioStyle.container}`}>
          <div className={porfolioStyle.mainContainer}>
            <div className={porfolioStyle.colOne}>
              <img src={ 'codeBox.jpg' } alt={'tets'} className={porfolioStyle.headerImg} />
            </div>

            <div className={porfolioStyle.colTwo}>
              <div className={porfolioStyle.heading}>
                <h2>Website Design</h2>
                <div className={porfolioStyle.hrDiv}><hr /></div>
              </div>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Link to={'/'}><FontAwesomeIcon icon={faArrowRightLong} className={porfolioStyle.arrow} size='2x'/></Link>
            </div>
          </div>
          <hr className={porfolioStyle.hrLine}/>
        </div>
        
        {/* <div className={`container ${porfolioStyle.miniBox}`}></div> */}
      </div>

      <div>
        {/* <div className={`container ${porfolioStyle.miniBox}`}></div> */}
        {/* <hr /> */}
        <div className={`container ${porfolioStyle.container}`}>
          <div className={porfolioStyle.mainContainer}>
            <div className={porfolioStyle.colTwo}>
              <div className={porfolioStyle.heading}>
                <h2>Website Design</h2>
                <div className={porfolioStyle.hrDiv}><hr /></div>
              </div>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Link to={'/'}><FontAwesomeIcon icon={faArrowRightLong} className={porfolioStyle.arrow} size='2x'/></Link>
            </div>

            <div className={porfolioStyle.colOne}>
              <img src={ 'codeBox.jpg' } alt={'tets'} className={porfolioStyle.headerImg} />
            </div>
          </div>
          <hr className={porfolioStyle.hrLine} />
        </div>
        
        {/* <div className={`container ${porfolioStyle.miniBox}`}></div> */}
      </div>
      
      <div>
        {/* <div className={`container ${porfolioStyle.miniBox}`}></div> */}
        {/* <hr /> */}
        <div className={`container ${porfolioStyle.container}`}>
          <div className={porfolioStyle.mainContainer}>
            <div className={porfolioStyle.colOne}>
              <img src={ 'codeBox.jpg' } alt={'tets'} className={porfolioStyle.headerImg} />
            </div>

            <div className={porfolioStyle.colTwo}>
              <div className={porfolioStyle.heading}>
                <h2>Website Design</h2>
                <div className={porfolioStyle.hrDiv}><hr /></div>
              </div>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Link to={'/'}><FontAwesomeIcon icon={faArrowRightLong} className={porfolioStyle.arrow} size='2x'/></Link>
            </div>
          </div>
          <hr className={porfolioStyle.hrLine} />
        </div>
       
        {/* <div className={`container ${porfolioStyle.miniBox}`}></div> */}
      </div>

      <div>
        {/* <div className={`container ${porfolioStyle.miniBox}`}></div> */}
        {/* <hr /> */}
        <div className={`container ${porfolioStyle.container}`}>
          <div className={porfolioStyle.mainContainer}>
            <div className={porfolioStyle.colTwo}>
              <div className={porfolioStyle.heading}>
                <h2>Website Design</h2>
                <div className={porfolioStyle.hrDiv}><hr /></div>
              </div>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Link to={'/'}><FontAwesomeIcon icon={faArrowRightLong} className={porfolioStyle.arrow} size='2x'/></Link>
            </div>

            <div className={porfolioStyle.colOne}>
              <img src={ 'codeBox.jpg' } alt={'tets'} className={porfolioStyle.headerImg} />
            </div>
          </div>
          <hr className={porfolioStyle.hrLine} />
        </div>
        
        {/* <div className={`container ${porfolioStyle.miniBox}`}></div> */}
      </div>

      <div>
        {/* <div className={`container ${porfolioStyle.miniBox}`}></div> */}
        {/* <hr /> */}
        <div className={`container ${porfolioStyle.container}`}>
          <div className={porfolioStyle.mainContainer}>
            <div className={porfolioStyle.colOne}>
              <img src={ 'codeBox.jpg' } alt={'tets'} className={porfolioStyle.headerImg} />
            </div>

            <div className={porfolioStyle.colTwo}>
              <div className={porfolioStyle.heading}>
                <h2>Website Design</h2>
                <div className={porfolioStyle.hrDiv}><hr /></div>
              </div>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Link to={'/'}><FontAwesomeIcon icon={faArrowRightLong} className={porfolioStyle.arrow} size='2x'/></Link>
            </div>
          </div>
          <hr className={porfolioStyle.hrLine} />
        </div>
        
        {/* <div className={`container ${porfolioStyle.miniBox}`}></div> */}
      </div>

      <div>
        {/* <div className={`container ${porfolioStyle.miniBox}`}></div> */}
        {/* <hr /> */}
        <div className={`container ${porfolioStyle.container}`}>
          <div className={porfolioStyle.mainContainer}>
            <div className={porfolioStyle.colTwo}>
              <div className={porfolioStyle.heading}>
                <h2>Website Design</h2>
                <div className={porfolioStyle.hrDiv}><hr /></div>
              </div>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Link to={'/'}><FontAwesomeIcon icon={faArrowRightLong} className={porfolioStyle.arrow} size='2x'/></Link>
            </div>

            <div className={porfolioStyle.colOne}>
              <img src={ 'codeBox.jpg' } alt={'tets'} className={porfolioStyle.headerImg} />
            </div>
          </div>
          <hr className={porfolioStyle.hrLine} />
        </div>
        
        {/* <div className={`container ${porfolioStyle.miniBox}`}></div> */}
      </div>

    </div>
  )
}

export default Portfolio