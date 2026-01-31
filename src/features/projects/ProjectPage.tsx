import React from 'react';
import PageContent from '@/components/pagecontent/PageContent';
import Card, { cardStyles } from '@/components/card/Card';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import ProjectCardContainer from '@/components/ProjectCard/ProjectCardContainer';
import { projects } from './data/projects';
import Footer from '@/components/footer/Footer';

export default function ProjectPage() {

    return (
        <div>
            <PageContent>
                <Card>
                    <div className={cardStyles.header}>
                        <h2>PROJECTS</h2>
                    </div>
                    <div className={cardStyles.divider}></div>
                    <div className={cardStyles.subheader}>
                        <h2>Here are some of the projects I've worked on recently. Click on any project to learn more about it!</h2>
                    </div>

                    <ProjectCardContainer>
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </ProjectCardContainer>
                </Card>
            </PageContent>
            <Footer />
        </div>
    );
}