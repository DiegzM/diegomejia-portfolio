// This component contains a field for name, email, and message, along with a submit button
// It will send data to formspree.io endpoint

import { useState } from "react";
import styles from "./ContactForm.module.css";

interface ContactFormProps {
    onSystemMessage: (
        message: string, 
        type?: "info" | "warning" | "error" | "success" 
    ) => void;
}

export default function ContactForm({ onSystemMessage }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch("https://formspree.io/f/maqjvajb", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            onSystemMessage("Message sent successfully!", "success");
            setFormData({ name: "", email: "", message: "" });
        } else {
            onSystemMessage("Failed to send message.", "error");
        }
    }

    return (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
            <label className={styles.contactFormLabel}>
                <span className={styles.labelText}>
                    Name <span className={styles.required}>*</span>
                </span>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required    
                />
            </label>
            <label className={styles.contactFormLabel}>
                <span className={styles.labelText}>
                    Email <span className={styles.required}>*</span>
                </span>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
            </label>
            <label className={styles.contactFormLabel}>
                <span className={styles.labelText}>
                    Message <span className={styles.required}>*</span>
                </span>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                />
            </label>
            <button className={styles.contactFormButton} type="submit">Send</button>
        </form>
    );
}