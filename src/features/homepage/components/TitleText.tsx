import React from 'react';
import styles from './TitleText.module.css';
import { assets } from "../assets/assets";

// Homepage (with video background on autoplay)

export default function TitleText() {
    const text = "Hi, I am Diego Mejia. I build full-stack and desktop apps, plus AI/ML projects."; // Text to type out
    const blinkSpeed = 500; // milliseconds for cursor blink
    const typeSpeedRange = [30, 140]; // milliseconds per character
    const [index, setIndex] = React.useState(0); // Current index of character to show
    const [blink, setBlink] = React.useState(true); // Cursor blink state

    // Typing effect
    React.useEffect(() => {
        if (index >= text.length) return; // Stop if all characters are shown
        const typeSpeed = Math.random() * (typeSpeedRange[1] - typeSpeedRange[0]) + typeSpeedRange[0];
        const t = setTimeout(() => {
            setIndex((prev) => prev + 1);
        }, typeSpeed);

        return () => clearTimeout(t);
    }, [index, text.length, typeSpeedRange]);

    return (
        <div className={styles.titleTextContainer}>
            <p className={styles.titleText}>{text.slice(0, index)}
                <span className={styles.cursor}>|</span>
            </p>
        </div>
    )
}