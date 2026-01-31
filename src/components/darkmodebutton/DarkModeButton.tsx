import React from 'react';
import styles from './DarkModeButton.module.css';
import { light, dark } from './assets/assets';
import { useTheme } from '@/context/ThemeProvider';

export default function DarkModeButton() {
    const { theme, toggleTheme } = useTheme();
    const isDarkMode = theme === 'dark';

    // Store spinning state

    const [isSpinning, setIsSpinning] = React.useState(false);

    const handleClick = () => {
        if (isSpinning) return; // Prevent multiple clicks while spinning
        setIsSpinning(true);
        toggleTheme();
        setTimeout(() => setIsSpinning(false), 600); // Duration of the spin animation
    }

    return (
        <button 
            className={styles.button}
            onClick={() => {
                handleClick();
            }}
        >
            <img 
                className={isSpinning ? styles.spinning : ''}
                src={isDarkMode ? dark : light} 
                alt={isDarkMode ? "Dark Mode" : "Light Mode"} 
            />
        </button>
    );
}