'use client';

import {BsLayoutSidebar, BsPin, BsChat} from "react-icons/bs";
import {HiOutlineHome} from "react-icons/hi";
import {AiOutlineCalendar} from "react-icons/ai";
import {SlLocationPin} from "react-icons/sl";
import styles from "@/styles/navigation/Desktop.module.css";
import { useState } from "react";
import {usePathname} from "next/navigation";

export default function Desktop() {
    const [toggle, setToggle] = useState<boolean>(false);
    const path = usePathname();

    return (
        <section className={styles.desktop}>
            <div className={styles.desktopHeader}>
                <h1 
                    style={{
                        display: toggle ? "none" : "",
                        transition: ".3s all ease-in-out"
                    }}
                    className={styles.desktopHeaderTitle}>LME</h1>
                <BsLayoutSidebar 
                    className={styles.desktopHeaderIcon} 
                    onClick={() => setToggle(!toggle)}
                />
            </div>
            <section className={styles.desktopMain}>
                <section className={styles.desktopMainLinks}>
                    <div className={(path === "/events") ? styles.desktopMainLinksActive : styles.desktopMainLinksLink}>
                        <HiOutlineHome className={styles.desktopMainLinksLinkIcon} />
                        <p 
                            style={{
                                display: toggle ? "none" : "",
                                transition: ".3s all ease-in-out"
                            }}
                            className={styles.desktopMainLinksLinkText}>Home</p>
                    </div>
                    <div className={(path === "/chats") ? styles.desktopMainLinksActive : styles.desktopMainLinksLink}>
                        <BsChat className={styles.desktopMainLinksLinkIcon} />
                        <p 
                            style={{
                                display: toggle ? "none" : "",
                                transition: ".3s all ease-in-out"
                            }}
                            className={styles.desktopMainLinksLinkText}>Chats</p>
                    </div>
                    <div className={(path === "/saved") ? styles.desktopMainLinksActive : styles.desktopMainLinksLink}>
                        <BsPin className={styles.desktopMainLinksLinkIcon} />
                        <p 
                            style={{
                                display: toggle ? "none" : "",
                                transition: ".3s all ease-in-out"
                            }}
                            className={styles.desktopMainLinksLinkText}>Saved Events</p>
                    </div>
                    <div className={(path === "/calendar") ? styles.desktopMainLinksActive : styles.desktopMainLinksLink}>
                        <AiOutlineCalendar className={styles.desktopMainLinksLinkIcon} />
                        <p 
                            style={{
                                display: toggle ? "none" : "",
                                transition: ".3s all ease-in-out"
                            }}
                            className={styles.desktopMainLinksLinkText}>Calendar</p>
                    </div>
                    <div className={(path === "/location") ? styles.desktopMainLinksActive : styles.desktopMainLinksLink}>
                        <SlLocationPin className={styles.desktopMainLinksLinkIcon} />
                        <p 
                            style={{
                                display: toggle ? "none" : "",
                                transition: ".3s all ease-in-out"
                            }}
                            className={styles.desktopMainLinksLinkText}>Location</p>
                    </div>
                </section>
                <div 
                    className={styles.desktopMainBottom}
                    style={{
                        width: toggle ? "2rem" : ""
                    }}
                >
                    <div 
                        className={styles.desktopMainBottomTrending}
                        style={{
                            display: toggle ? "none" : "",
                            transition: ".3s all ease-in-out"
                        }}
                    >
                        <h4 className={styles.desktopMainBottomTrendingTitle}>Trending Event</h4>
                        <p className={styles.desktopMainBottomTrendingText}>Add this hot event to your calendar or pinned list.</p>
                        <button className={styles.desktopMainBottomTrendingButton}>See Event</button>
                    </div>
                    <div 
                        style={{
                            alignItems: toggle ? "center" : "",
                            justifyContent: toggle ? "center" : ""
                        }}
                        className={styles.desktopMainBottomProfile}>
                        <div className={styles.desktopMainBottomProfileIcon}></div>
                        <div 
                            style={{
                                width: toggle ? "100%" : "",
                                display: toggle ? "none" : "",
                                transition: ".3s all ease-in-out"
                            }}
                            className={styles.desktopMainBottomProfileUser}>
                            <h3 className={styles.desktopMainBottomProfileUserTitle}>Awonke Mnotoza</h3>
                            <p className={styles.desktopMainBottomProfileUserText}>View account</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}