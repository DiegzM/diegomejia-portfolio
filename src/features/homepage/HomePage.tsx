import React from 'react';
import styles from './HomePage.module.css';
import { assets } from "./assets/assets";
import TitleText from './components/TitleText';
import Footer from '@/components/footer/Footer';
import Card, { cardStyles } from '@/components/card/Card';  
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import ProjectCardContainer from '@/components/ProjectCard/ProjectCardContainer';
import LocationEmail from '@/components/locationemail/LocationEmail';
import { NavLink } from 'react-router-dom';
import { projects } from '../projects/data/projects';
import pfp from "/about/assets/pfp.png";

// Homepage (with video background on autoplay)

export default function HomePage() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    // Navigation links for buttons on page
    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ]

    // Get featured projects from projects data file dynamically (featured = true)
    const featuredProjects = projects.filter(project => project.featured);

    return (
        <div className={styles.homepage}>
            <div className={styles.videoContainer}>
                <video className={styles.video} autoPlay loop playsInline muted>
                    <source src={assets.portfolioVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dynamic title text */}
                <TitleText />

                {/* Down arrow icon to indicate scroll */}
                <div className={styles.downArrowContainer} onClick={() => {
  
                    document.documentElement.scrollTo({
                        top: window.innerHeight - 80,
                        behavior: 'smooth'
                    });
                }}>
                    <img src={assets.downArrow} alt="Down Arrow" className={styles.downArrow} />
                </div>
            </div>

            <div className={styles.homepageContent}>
                <Card backgroundColor="var(--bg-gray)" boxShadow="var(--shadow-normal)">
                    <div className={cardStyles.header}>
                        <h2>Welcome to my Portfolio!</h2>
                    </div>
                    <div className = {cardStyles.divider}></div>   
                    <p className={cardStyles.text}>
                        I'm a Computer Science student studying at Cal Poly Pomona, and I enjoy building applications,
                        learning new technologies, and creating smooth user experiences. Most importantly, I aim to
                        create real-world solutions through code. <br></br><br></br>
                        I develop applications both for desktop and web platforms, and I also have experience with AI/ML training and music software development.
                    </p>
                </Card>
                
                <Card backgroundColor="var(--bg-gray)" boxShadow="var(--shadow-normal)" >
                    <div className={cardStyles.header}>
                        <h2>Check out my Projects!</h2>
                    </div>
                    <div className = {cardStyles.divider}></div>
                    <ProjectCardContainer>
                        {featuredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </ProjectCardContainer>
                    <NavLink to="/projects">
                        <button className={cardStyles.button}>See More</button>
                    </NavLink>
                </Card>

                <Card backgroundColor="var(--bg-gray)" boxShadow="var(--shadow-normal)">
                    <div className={cardStyles.header}>
                        <h2>Get to Know Me</h2>
                    </div>
                    <div className = {styles.pfpContainer}>
                        <img src={pfp} alt="Profile Picture" className={styles.pfp} />
                    </div> 
                    <LocationEmail />
                    <NavLink to="/about">
                        <button className={cardStyles.button}>About Me</button>
                    </NavLink>
                    <div className={cardStyles.divider}></div>
                    <div className={cardStyles.subheader}>
                        <h2>Let's Connect!</h2>
                    </div>
                    <NavLink to="/contact">
                        <button className={cardStyles.button}>Contact Me</button>
                    </NavLink>
                </Card>

            </div>
            <Footer />
        </div>
    )
}