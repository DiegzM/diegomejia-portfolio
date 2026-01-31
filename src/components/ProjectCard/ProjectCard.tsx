
import Card, { cardStyles } from "../card/Card";
import React from "react";
import styles from './ProjectCard.module.css';
import { Project } from "@/features/projects/data/projects";
import { NavLink } from "react-router-dom";

interface ProjectCardProps {
    project: Project;
}

// ProjectCard for listing individual projects, to be used in project listings
// Extends from a generic Card component, has a different background and layout
// Takes in project, and fetches project data
export default function ProjectCard({
    project,
}: ProjectCardProps) {

    if (project == null) {
        return <div>Project not found</div>;
    }

    const { title, shortDescription, thumbnail } = project;

    React.useEffect(() => {
        console.log("thumbnail url:" + thumbnail);
    }, [thumbnail]);
    
    return (
        <NavLink to={`/projects/${project.id}`} className={styles.projectCardLink}>
            <Card
                backgroundColor="var(--bg-light-gray)"
                boxShadow="var(--shadow-elevated)"
                className={styles.projectCard}
            >
                <div className={styles.projectCardThumbnail}>
                    <img src={thumbnail} alt={`${title} Thumbnail`} />
                </div>
                <div className={styles.projectCardInfo}>
                    <h3>{title}</h3>
                    <div className={styles.projectCardDivider}></div>
                    <p>{shortDescription}</p>
                </div>
            </Card>
        </NavLink>
    );
}