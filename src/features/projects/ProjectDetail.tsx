import { Navigate, NavLink, useNavigate, useParams } from 'react-router-dom';
import { projects } from './data/projects';
import Footer from '@/components/footer/Footer';
import PageContent from '@/components/pagecontent/PageContent';
import Card, {cardStyles} from '@/components/card/Card';
import { assets } from './assets/assets';
import styles from './Project.module.css';

// Project detail page, will be dynamically instantiated based on project data
export default function ProjectDetail() {
    
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const project = projects.find(proj => proj.id === id);
    
    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            {/* Back button to navigate to the previous page */}
            <NavLink 
                to="/projects"
                className={styles.backButton}>
                <img src={assets.back} alt="Back Button" />
            </NavLink>

            <PageContent>
                <Card>

                    {/* Project title */}
                    <div className={cardStyles.header}>
                        <h2>{project.title}</h2>
                    </div>
                    <div className={cardStyles.divider}></div>

                    {/* Project Thumbnail */}
                    <div className={styles.thumbnailContainer}>
                        <img src={project.thumbnail} alt={`${project.title} Thumbnail`} />
                    </div>

                    {/* Project short description */}
                    <div className={cardStyles.subheader}>
                        <h2>{project.shortDescription}</h2>
                    </div>
                    <div className={cardStyles.divider}></div>

                    {/* Optional links section */}
                    {project.githubUrl || project.liveUrl ? (
                        <div className={styles.linkContainer}>
                            <div className={cardStyles.subheader}>
                                <h1>Links:</h1>
                            </div>
                            <div className={styles.linkButtonContainer}>
                                {project.githubUrl && (
                                    <button 
                                        className={cardStyles.button + ` ${styles.linkButton}`}
                                        onClick={() => window.open(project.githubUrl, '_blank')}
                                    >
                                        <img src={assets.github} alt="GitHub Icon"/>
                                        View on GitHub
                                    </button>
                                )}
                                {project.liveUrl && (
                                    <button 
                                        className={cardStyles.button + ` ${styles.linkButton}`}
                                        onClick={() => window.open(project.liveUrl, '_blank')}
                                    >
                                        <img src={assets.live} alt="Live Demo Icon" />
                                        Try Live Demo!
                                    </button>
                                )}
                            </div>
                        </div>
                    ) : null}
                </Card>


                {/* Render each section of the project dynamically based on section blocks */}
                {project.sections.map((section, index) => (
                    <Card key={index}>

                        {/* Dynamically iterate and create blocks in order */}
                        {section.blocks.map((block, blockIndex) => {
                            switch (block.type) {
                                case 'subheader':
                                    return <div key={blockIndex} className={cardStyles.subheader}><h2>{block.content}</h2></div>;
                                case 'text':
                                    return <p key={blockIndex} className={styles.projectText}>{block.content}</p>;
                                case 'bullets':
                                    return (
                                        <div key={blockIndex} className={styles.projectBullets}>
                                            {block.header && <h3>{block.header}</h3>}
                                            <ul>
                                                {block.content.map((item, itemIndex) => (
                                                    <li key={itemIndex}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                case 'divider':
                                    return <div key={blockIndex} className={cardStyles.divider}></div>;
                                case 'video':
                                    return (
                                        <div key={blockIndex} className={styles.projectVideoContainer}>
                                            <video controls>
                                                <source src={block.src} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </Card>
                ))}

            </PageContent>
            <Footer />
        </div>
    );
}