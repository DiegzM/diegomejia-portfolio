import React from 'react';
import styles from './Card.module.css';

// Basic reusable Card component with customizable background color, and shadow
// parameters change the css background-color and box-shadow property

type CardProps = React.PropsWithChildren<{
    backgroundColor?: string; // CSS background-color value
    boxShadow?: string; // CSS box-shadow value
    className?: string;
}>;

export { styles as cardStyles };

export default function Card({
    backgroundColor = "var(--bg-gray)",
    boxShadow = "var(--shadow-normal)",
    className = "",
    children,
}: CardProps) {

    // Store state for visible effect (animates when card is visible in viewport)
    const [isVisible, setIsVisible] = React.useState(false);
    const cardRef = React.useRef<HTMLDivElement>(null);

    // Use Intersection Observer to detect when card is in viewport
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                    else {
                        setIsVisible(false);
                    }
                });
            }, { threshold: 0.1 } // Trigger when 10% of the card is visible
        );
        if (cardRef.current) {
            observer.observe(cardRef.current);
        }
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`${styles.card} ${isVisible ? styles.visible : ''} ${className || ''}`}
            style={{
                "--card-bg-color": backgroundColor,
                "--card-box-shadow": boxShadow,
            } as React.CSSProperties}
        >
            {children}
        </div>
    );
}