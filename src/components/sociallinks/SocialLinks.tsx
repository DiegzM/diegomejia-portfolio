import styles from './SocialLinks.module.css';
import { assets } from './assets/assets';

// SocialLinks component to display social media links/icons
export default function SocialLinks() {
    return (
        <div className={styles.socialLinkContainer}>
            <div className={styles.socialLink}>
                <a href="mailto:diegom@laform.com">
                    <img src={assets.email} alt="Email" />
                </a>
            </div>
            <div className={styles.socialLink}>
                <a href="https://github.com/DiegzM" target="_blank" rel="noopener noreferrer">
                    <img src={assets.github} alt="GitHub" />
                </a>
            </div>
            <div className={styles.socialLink}>
                <a href="https://www.linkedin.com/in/diego-mejia-53122a32a/" target="_blank" rel="noopener noreferrer">
                    <img src={assets.linkedin} alt="LinkedIn" />
                </a>
            </div>
        </div>
    );
}