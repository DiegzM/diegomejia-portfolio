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
                                        <b>Hi there!</b> I'm a Computer Science student studying at Cal Poly Pomona, and I enjoy building applications,
                                        learning new technologies, and creating smooth user experiences. Most importantly, I aim to
                                        create real-world solutions through code.
                                        I develop applications both for desktop and web platforms, and I also have experience with AI/ML training and music software development.
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