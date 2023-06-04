'use client';

import {HiOutlineMusicalNote} from "react-icons/hi2";
import {TfiAnnouncement} from "react-icons/tfi";
import styles from "@/styles/header/HeaderDesktop.module.css";
import { useState } from "react";

export default function HeaderDesktop() {
    const [play, setPlay] = useState<boolean>(false);

    return (
        <header className={styles.headerDesktop}>
            <section className={styles.headerDesktopGreet}>
                <h3 className={styles.headerDesktopGreetTitle}>Welcome</h3>
                <p className={styles.headerDesktopGreetText}>Awonke</p>
            </section>
            <section className={styles.headerDesktopDetails}>
                <p className={styles.headerDesktopDetailsText}>Report</p>
                <div 
                    className={play ? styles.headerDesktopDetailsIconsPlay : styles.headerDesktopDetailsIcons}
                    onClick={() => setPlay(!play)}
                >
                    <HiOutlineMusicalNote className={styles.headerDesktopDetailsIcon} />
                </div>
                <div className={styles.headerDesktopDetailsIcons}>
                    <TfiAnnouncement className={styles.headerDesktopDetailsIcon} />
                </div>
            </section>
        </header>
    )
}