// Code for a message by the system, such as notifications or alerts or errors

import styles from "./SystemMessage.module.css";
import { motion } from "framer-motion";

interface SystemMessageProps {
    message: string;
    type?: "info" | "warning" | "error" | "success";
}

export default function SystemMessage({ message, type = "info" }: SystemMessageProps) {
    let messageType = styles.info;
    if (type === "warning") {
        messageType = styles.warning;
    } else if (type === "error") {
        messageType = styles.error;
    } else if (type === "success") {
        messageType = styles.success;
    }

    return (
        <motion.div
            className={`${styles.systemMessage} ${messageType}`}
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            transition={{ duration: 0.5 }}
        >
            {message}
        </motion.div>
    );
}

