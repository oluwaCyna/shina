import React from 'react'
import headerStyle from './header.module.css'

function Header(props) {
  return (
    <div className={headerStyle.header}>
        <img src={ props.content.img } alt={ props.content.imgAlt } className={headerStyle.headerImg} />
        <div className={headerStyle.overlay}></div>
        <div className={headerStyle.titleBox}>
            <h2>{ props.content.title }</h2>
            <p>{ props.content.desc }</p>
        </div>
    </div>
  )
}

export default Header