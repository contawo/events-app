'use client';

import { BsBell } from "react-icons/bs";
import { HiOutlineMusicalNote } from "react-icons/hi2";
import styles from "@/styles/header/HeaderMobile.module.css";

export default function HeaderMobile() {
    return (
        <header className={styles.headerMobile}>
            <section className={styles.headerMobileInfo}>
                <div className={styles.headerMobileInfoUser}></div>
                <p className={styles.headerMobileInfoGreet}>Hi</p>
                <p className={styles.headerMobileInfoText}>Awonke</p>
            </section>
            <section>
                <HiOutlineMusicalNote />
                <BsBell />
            </section>
        </header>
    )
}