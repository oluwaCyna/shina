import React, { useEffect, useRef, useState } from 'react'
import tabSectionStyle from './tabsection.module.css'

function TabSection(props) {
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
        <div className={tabSectionStyle.tab}>
            <button className={tabSectionStyle.tablinks} ref={firstBtn} onClick={()=> {setTabState({...TabState, tabOneBtn: true, tabTwoBtn: false, tabThreeBtn: false,}); TabToggleFunction(tabOne)}} style={TabState.tabOneBtn ? Active : Passive}>Website Type</button>
            <button className={tabSectionStyle.tablinks} onClick={()=> {setTabState({...TabState, tabOneBtn: false, tabTwoBtn: true, tabThreeBtn: false,}); TabToggleFunction(tabTwo)}} style={TabState.tabTwoBtn ? Active : Passive}>Possible Requirement</button>
            <button className={tabSectionStyle.tablinks} onClick={()=> {setTabState({...TabState, tabOneBtn: false, tabTwoBtn: false, tabThreeBtn: true,}); TabToggleFunction(tabThree)}} style={TabState.tabThreeBtn ? Active : Passive}>Stack/Platform</button>
        </div>
        <div className={tabSectionStyle.tabcontent} style={Style} ref={tabOne}>
            <p>{props.tab.tabOne}</p>
        </div>
        <div className={tabSectionStyle.tabcontent} style={Style} ref={tabTwo}>
            <p>{props.tab.tabTwo}</p> 
        </div>
        <div className={tabSectionStyle.tabcontent} style={Style} ref={tabThree}>
            <p>{props.tab.tabThree}</p>
        </div>
    </div>
  )
}

export default TabSection