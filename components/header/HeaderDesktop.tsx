'use client';

import {HiOutlineMusicalNote} from "react-icons/hi2";
import styles from "@/styles/header/HeaderDesktop.module.css";
import { useState } from "react";
import { BsBell } from "react-icons/bs";

export default function HeaderDesktop() {
    const [play, setPlay] = useState<boolean>(false);

    return (
        <header className={styles.headerDesktop}>
            <section className={styles.headerDesktopGreet}>
                <h3 className={styles.headerDesktopGreetTitle}>Welcome,</h3>
                <p className={styles.headerDesktopGreetText}>awonke</p>
            </section>
            <section className={styles.headerDesktopDetails}>
                <p className={styles.headerDesktopDetailsText}>Report</p>
                <HiOutlineMusicalNote 
                    className={play ? styles.headerDesktopDetailsIconPlay : styles.headerDesktopDetailsIcon} 
                    onClick={() => setPlay(!play)}
                />
                <BsBell className={styles.headerDesktopDetailsIcon} />
                <div className={styles.headerDesktopDetailsUser}></div>
            </section>
        </header>
    )
}