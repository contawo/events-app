'use client';

import { AiOutlineFilter } from "react-icons/ai";
import styles from "@/styles/events/BannerMobile.module.css";
import {useState} from "react";

export default function BannerMobile() {
    const [number, setNumber] = useState<number>(0)

    setTimeout(() => {
      if (number < 2) {
        setNumber(number + 1)
      } else {
        setNumber(0)
      }
    }, 2000)

    return (
        <section className={styles.bannerMobile}>
            <div className={styles.bannerMobileSearch}>
                <input 
                    type="search" 
                    placeholder="Search event city..." 
                    className={styles.bannerMobileSearchInput}
                />
                <AiOutlineFilter className={styles.bannerMobileSearchIcon} />
            </div>
            <section className={styles.bannerMobileContent}>
                <div className={styles.bannerMobileContentOverlap}>l</div>
                <div className={styles.bannerMobileContentInfo}>
                    <p className={styles.bannerMobileContentInfoTitle}>Let us help you</p>
                    <div className={styles.bannerMobileContentInfoTexts}>
                        <h4 
                            className={styles.bannerMobileContentInfoText}
                            style={{
                                color: (number === 0) ? 'rgb(216, 0, 0)' : "",
                                transition: ".3s all ease-in-out"
                            }}
                        >Locate</h4>
                        <h4 
                            className={styles.bannerMobileContentInfoText}
                            style={{
                                color: (number === 1) ? '#0085D1' : "",
                                transition: ".3s all ease-in-out"
                            }}
                        >Upcoming</h4>
                        <h4 
                            className={styles.bannerMobileContentInfoText}
                            style={{
                                color: (number === 2) ? '#FFA600' : "",
                                transition: ".3s all ease-in-out"
                            }}
                        >Events...</h4>
                    </div>
                    <p className={styles.bannerMobileContentInfoSub}>Events in one platform.</p>
                </div>
            </section>
        </section>
    )
}