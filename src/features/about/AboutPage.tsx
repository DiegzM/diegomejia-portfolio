import Footer from "@/components/footer/Footer";
import PageContent from "@/components/pagecontent/PageContent";
import Card, {cardStyles} from "@/components/card/Card";
import pfp from "/about/assets/pfp.png";
import styles from "./AboutPage.module.css";
import SocialLinks from "@/components/sociallinks/SocialLinks";
import { assets } from "./assets/assets";
import { NavLink } from "react-router";

// About Page component
export default function AboutPage() {
    return (
        <div>
            <PageContent>
                <Card>
                    <div className={cardStyles.header}>
                        <h2>ABOUT ME</h2>
                    </div>
                    <div className={styles.contentContainer}>
                        <div className={styles.textCardContainer}>
                            <Card backgroundColor="var(--bg-light-gray)">
                                <div className={cardStyles.text}>
                                    <p>
                                        <b>Hi there!</b> I'm Diego Mejia, a Computer Science student at Cal Poly Pomona with a passion for building applications and creating smooth user experiences.
                                        I enjoy learning new technologies and applying them to solve real-world problems through code. 
                                        My interests include web development, AI/ML, and mobile app development. 
                                        In my free time, I love playing the guitar, exploring new music, and hiking.
                                    </p>
                                </div>
                            </Card>
                        </div>
                        <div className={styles.rightContainer}>
                            <Card backgroundColor="var(--bg-black)">
                                <div className={styles.pfpContainer}>
                                    <img src={pfp} alt="Profile Picture" />
                                </div>
                                <SocialLinks />
                                <div className={`${cardStyles.button} ${styles.resumeButton}`}
                                    onClick={() => {
                                        window.open(assets.diego_mejia_resume, '_blank');
                                    }}>
                                    View Resume
                                </div>
                                <NavLink className={`${cardStyles.button} ${styles.contactButton}`} to="/contact">
                                    Contact Me
                                </NavLink>
                            </Card>
                        </div>
                    </div>
                </Card>
            </PageContent>
        <Footer />
        </div>
            
    );
}