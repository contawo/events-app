'use client';

import { AiOutlineCalendar } from "react-icons/ai";
import { BsChat, BsPin } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import styles from "@/styles/navigation/Mobile.module.css";
import { usePathname } from "next/navigation";

export default function Mobile() {
    const path = usePathname();

    return (
        <nav className={styles.mobile}>
            <div className={styles.mobileContent}>
                <IoHomeOutline 
                    className={(path === "/events") ? styles.mobileContentIconActive : styles.mobileContentIcon}
                />
                <p className={styles.mobileContentText}>Home</p>
            </div>
            <div className={styles.mobileContent}>
                <BsChat 
                    className={(path === "/chats") ? styles.mobileContentIconActive : styles.mobileContentIcon}
                />
                <p className={styles.mobileContentText}>Chats</p>
            </div>
            <div className={styles.mobileContent}>
                <BsPin 
                    className={(path === "/saved") ? styles.mobileContentIconActive : styles.mobileContentIcon}
                />
                <p className={styles.mobileContentText}>Saved</p>
            </div>
            <div className={styles.mobileContent}>
                <AiOutlineCalendar 
                    className={(path === "/calendar") ? styles.mobileContentIconActive : styles.mobileContentIcon}
                />
                <p className={styles.mobileContentText}>Calendar</p>
            </div>
            <div className={styles.mobileContent}>
                <SlLocationPin 
                    className={(path === "/location") ? styles.mobileContentIconActive : styles.mobileContentIcon}
                />
                <p className={styles.mobileContentText}>Location</p>
            </div>
        </nav>
    )
}