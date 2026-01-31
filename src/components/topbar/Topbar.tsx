import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './Topbar.module.css';
import { assets, icons } from "./assets/assets";
import DarkModeButton from "@/components/darkmodebutton/DarkModeButton";
import { useTheme } from '@/context/ThemeProvider';

// Topbar component
export default function Topbar() {

  // Store the state of hamburger menu (open/closed)
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Get path name for conditional rendering
  const {pathname} = useLocation();

  // Store the state of whether to show background or not based on scroll position / certain pages
  const [showBackground, setShowBackground] = React.useState(false);

  // Store light/dark mode state
  const { theme } = useTheme();

  // For debugging set showBackground to false to test transparent topbar
  React.useEffect(() => {
    setShowBackground(false);
  }, []);

  // Only for homepage, change topbar background on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.8; // 80% of viewport height
      // For homepage, show background only after scrolling past trigger point
      if (pathname === "/") {
        if (theme === 'light') {
          setShowBackground(true);
          return;
        }
        else { 
          setShowBackground(window.scrollY > trigger);
        }
      } else {
        setShowBackground(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, theme]);
  
  // Close the hamburger menu and set menuOpen to false when window is resized to avoid layout issues
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 725 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  // Store the navlinks for easier access across navlink and hamburger menu and store icons
  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  // Render the topbar
  return (
    <nav className={
      styles.nav + 
      (menuOpen ? ` ${styles.navOpen}` : "") +
      (showBackground ? "" : ` ${styles.backgroundInvisible}`)
    }>

      <div className={styles.innerNav}>

        {/* Left group with title and nav links */}
        <div className={styles.leftGroup}>
          
          {/* Title linking to home */}
          <NavLink to="/" className={styles.title}>
            DIEGO MEJIA
          </NavLink>

          {/* Navigation links dynamically created from navLinks */}
          <ul className={styles.navLinks}>
            {navLinks.map(link => (
              <li key={link.name}>
                <NavLink to={link.path} className={({isActive}) => (isActive ? styles.activeLink: undefined)}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right group with icon links */}
        <div className={styles.rightGroup}>
          <ul className={styles.socialLinks}>

            {/* Image icons for email, github, etc*/}
            <li>
              <a href="mailto:diegom@laform.com">
                <img src={assets.email} alt="Email" className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://github.com/DiegzM" target="_blank" rel="noopener noreferrer">
                <img src={assets.github} alt="GitHub" className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/diego-mejia-53122a32a/" target="_blank" rel="noopener noreferrer">
                <img src={assets.linkedin} alt="LinkedIn" className={styles.icon} />
              </a>
            </li>
          </ul>

          {/* Hamburger menu (button only) for mobile view */}
          <button className={styles.hamburgerButton} aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
            <img src={assets.hamburger} alt="Menu" className={styles.icon} />
          </button>
        </div>
      </div>

      {/* Hamburger menu dropdown, shown when menuOpen is true */}
      <div className={`${styles.hamburgerMenu} ${menuOpen ? styles.open : ""}`}>
        <div className={styles.hamburgerMenuInner}>
          <ul className={styles.hamburgerNavLinks}>
            {navLinks.map(link => (
              <li key={link.name}>
                <NavLink to={link.path} onClick={() => setMenuOpen(false)} className={({isActive}) => (isActive ? styles.activeLink: undefined)}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className={styles.hamburgerSocialLinks}>
            <a href="mailto:diegom@laform.com">
              <img src={assets.email} alt="Email" className={styles.icon} />
            </a>
            <a href="https://github.com/DiegzM" target="_blank" rel="noopener noreferrer">
              <img src={assets.github} alt="GitHub" className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com/in/diego-mejia-53122a32a/" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin} alt="LinkedIn" className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}