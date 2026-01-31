import React from "react";
import { assets } from "./assets/assets";
import styles  from "./LocationEmail.module.css";

// LocationEmail component for displaying location and email information


export default function LocationEmail() {
    return (
        <div className={styles.locationEmailContainer}>
            <div className={styles.locationEmailRow}>
                <img src={assets.location} alt="Location"></img>
                <span>Based in Los Angeles, CA</span>
            </div>
            <div className={styles.locationEmailRow}>
                <img src={assets.email} alt="Email"></img>
                <span>diegom@laform.com</span>
            </div>
        </div>
    );
}