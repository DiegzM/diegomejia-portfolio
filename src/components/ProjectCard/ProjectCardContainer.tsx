
import React from 'react';
import styles from './ProjectCard.module.css';


// Grid style container for project cards (applied in homepage and projects page)
export default function ProjectCardContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.projectCardContainer}>
            {children}
        </div>
    );
}