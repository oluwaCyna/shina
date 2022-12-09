import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import navStyle from './navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavigationModal from './NavigationModal';

const Navigation = () => {
    const [display, setDisplay] = useState({
        display: 'none'
    });
    const handleMobileNav = () => { setDisplay({
        display: 'block'
    })};
    const handleCloseModal = () => { setDisplay({
        display: 'none'
    })};

    const mediaQuery = window.matchMedia( '( max-width: 899px )' );
    const show = {
        display: 'flex'
    }

    const hide = {
        display: 'none'
    }



  return (
    <div className={navStyle.navContainer}>
        <div className={navStyle.logo}>
            oluwaCyna
        </div>
        <div className={navStyle.nav}>
            <nav className={navStyle} style={ mediaQuery.matches ? hide : show }>
                <NavLink
                to="/"
                className={({ isActive }) =>
                isActive ? navStyle.linksActive : navStyle.links
            }
                >
                Home
                </NavLink>
                <NavLink
                to="about"
                className={({ isActive }) =>
                isActive ? navStyle.linksActive : navStyle.links
            }
                >
                About
                </NavLink>
                <NavLink
                to="portfolio"
                className={({ isActive }) =>
                isActive ? navStyle.linksActive : navStyle.links
            }
                >
                Portfolio
                </NavLink>
                <NavLink
                to="services"
                className={({ isActive }) =>
                isActive ? navStyle.linksActive : navStyle.links
            }
                >
                Services
                </NavLink>
                <NavLink
                to="contact"
                className={({ isActive }) =>
                isActive ? navStyle.linksActive : navStyle.links
            }
                >
                Contact
                </NavLink>
            </nav>
            <button className={navStyle.btn}  style={ mediaQuery.matches ? hide : show }>
                Request Quote
            </button>
            <FontAwesomeIcon icon={faBars} onClick= {handleMobileNav} style={ mediaQuery.matches ? show : hide } />
        </div>
        <NavigationModal display={display} click={handleCloseModal}/>
    </div>
  )
}

export default Navigation