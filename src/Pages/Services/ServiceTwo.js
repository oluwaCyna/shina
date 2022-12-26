import React, { useEffect, useRef, useState } from 'react'
import serviceGroupStyle from './servicegroup.module.css'

function ServiceTwo() {
    const Active = {
        backgroundColor: '#ddd'
    }
    const Passive = {
        backgroundColor: '#f1f1f1'
    }
    const [TabState, setTabState] = useState({
        tabOneBtn: false,
        tabTwoBtn: false,
        tabThreeBtn: false,
    });
    const Style = {
        display: 'none'
    };

    var tabOne = useRef();
    var tabTwo = useRef();
    var tabThree = useRef();
    const firstBtn = useRef();
    
    const TabToggleFunction = (tabRef) => { 
        tabOne.current.style.display = 'none';
        tabTwo.current.style.display = 'none';
        tabThree.current.style.display = 'none';
        tabRef.current.style.display = 'block';
    }
    useEffect(()=>firstBtn.current.click(),[])
  return (
    <div>
        <div>
            <div className={serviceGroupStyle.container}>
                <div className={serviceGroupStyle.heading}>
                    <h2>Website Design</h2>
                    <div className={serviceGroupStyle.hrDiv}><hr /></div>
                </div>
                <p className={serviceGroupStyle.desc}>
                    This is an examp0ple of something that
                </p>
                <div>
                    <div className={serviceGroupStyle.tab}>
                        <button className={serviceGroupStyle.tablinks} ref={firstBtn} onClick={()=> {setTabState({...TabState, tabOneBtn: true, tabTwoBtn: false, tabThreeBtn: false,}); TabToggleFunction(tabOne)}} style={TabState.tabOneBtn ? Active : Passive}>Website Type</button>
                        <button className={serviceGroupStyle.tablinks} onClick={()=> {setTabState({...TabState, tabOneBtn: false, tabTwoBtn: true, tabThreeBtn: false,}); TabToggleFunction(tabTwo)}} style={TabState.tabTwoBtn ? Active : Passive}>Possible Requirement</button>
                        <button className={serviceGroupStyle.tablinks} onClick={()=> {setTabState({...TabState, tabOneBtn: false, tabTwoBtn: false, tabThreeBtn: true,}); TabToggleFunction(tabThree)}} style={TabState.tabThreeBtn ? Active : Passive}>Stack/Platform</button>
                    </div>
                    <div className={serviceGroupStyle.tabcontent} style={Style} ref={tabOne}>
                        <h3>Heading 1</h3>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        </p>
                    </div>
                    <div className={serviceGroupStyle.tabcontent} style={Style} ref={tabTwo}>
                        <h3>Heading 1</h3>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            </p>
                    </div>
                    <div className={serviceGroupStyle.tabcontent} style={Style} ref={tabThree}>
                        <h3>Heading 1</h3>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            </p>
                    </div>
                </div>
                <button className={'btn btn-primary'}>Book</button>
            </div>
        </div>
    </div>
  )
}

export default ServiceTwo