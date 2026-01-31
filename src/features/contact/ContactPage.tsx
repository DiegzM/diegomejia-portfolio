import Footer from "@/components/footer/Footer";
import PageContent from "@/components/pagecontent/PageContent";
import Card, {cardStyles} from "@/components/card/Card";
import SystemMessage from "@/components/systemmessage/SystemMessage";
import { useState } from "react";
import styles from "./ContactPage.module.css";
import ContactForm from "./components/ContactForm";

// Contact page component
export default function ContactPage({ showMessage }: { showMessage: (message: string, type?: "info" | "warning" | "error" | "success") => void }) {
        
    return (
        <div>
            <PageContent>
                <Card>
                    <div className={cardStyles.header}>
                        <h2>CONTACT ME</h2>
                    </div>
                    

                    {/* Contact form */}
                    <ContactForm onSystemMessage={showMessage} />
                </Card>
            </PageContent>
            <Footer />
        </div>
            
    );
}