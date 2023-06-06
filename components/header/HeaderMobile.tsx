'use client';

import { BsBell } from "react-icons/bs";
import { HiOutlineMusicalNote } from "react-icons/hi2";
import styles from "@/styles/header/HeaderMobile.module.css";
import {useState} from "react";

export default function HeaderMobile() {
    const [play, setPlay] = useState<boolean>(false)

    return (
        <header className={styles.headerMobile}>
            <section className={styles.headerMobileInfo}>
                <div className={styles.headerMobileInfoUser}></div>
                <p className={styles.headerMobileInfoGreet}>Hi</p>
                <p className={styles.headerMobileInfoText}>Awonke</p>
            </section>
            <section className={styles.headerMobileDetails}>
                <HiOutlineMusicalNote 
                    className={play ? styles.headerMobileDetailsIconActive : styles.headerMobileDetailsIcon} 
                    onClick={() => setPlay(!play)}
                />
                <BsBell className={styles.headerMobileDetailsIcon} />
            </section>
        </header>
    )
}