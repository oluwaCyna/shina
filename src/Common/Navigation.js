import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import navStyle from "./navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavigationModal from "./NavigationModal";

const Navigation = () => {
    // Toggle mobile nav modal
  const [display, setDisplay] = useState({
    display: "none",
  });

  const handleMobileNav = () => {
    setDisplay({
      display: "block",
    });
  };
  const handleCloseModal = () => {
    setDisplay({
      display: "none",
    });
  };

  // Toggle between mobile nav and desktop nav
  const [navView, setNavView] = useState({
    mobile: "",
    desktop: "",
  });
  const mediaQuery = window.matchMedia("( max-width: 899px )");

  mediaQuery.onchange = () => {
    if (mediaQuery.matches) {
      setNavView({
        ...navView,
        mobile: "flex",
        desktop: "none",
      });
    } else {
      setNavView({
        ...navView,
        mobile: "none",
        desktop: "block",
      });
    }
  };
  
  useEffect(() => {
    if (mediaQuery.matches) {
      setNavView({
        ...navView,
        mobile: "flex",
        desktop: "none",
      });
    } else {
      setNavView({
        ...navView,
        mobile: "none",
        desktop: "block",
      });
    }
  }, []);

  return (
    <div className={navStyle.navContainer}>
      <div className={navStyle.logo}>oluwaCyna</div>
      <div className={navStyle.nav}>
        <nav className={navStyle} style={{ display: navView.desktop }}>
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
        <Link to={'/'} className={'btn primary-btn'} style={{ display: navView.desktop }}>
          Request Quote
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          onClick={handleMobileNav}
          style={{ display: navView.mobile }}
        />
      </div>
      <NavigationModal display={display} click={handleCloseModal} />
    </div>
  );
};

export default Navigation;
