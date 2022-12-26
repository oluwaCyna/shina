import React from 'react'
import eachServiceStyle from './eachservice.module.css'
import TabSection from './TabSection'

function EachService(props) {
  return (
    <div className={eachServiceStyle.container}>
        <div className={eachServiceStyle.heading}>
            <h2>{props.service.title}</h2>
            <div className={eachServiceStyle.hrDiv}><hr /></div>
        </div>
        <p className={eachServiceStyle.desc}>
            {props.service.desc}
        </p>
        <TabSection tab={props.service} />
        <button className={'btn btn-primary'}>Book</button>
    </div>
  )
}

export default EachService