'use client';

import { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import styles from "@/styles/Genre.module.css";

const GENRELIST : Array<string> = ["Amapiano", "Hip Hop", "House", "Jazz", "Gospel", "Afropop", "DeepHouse", "Soul Music", "Rock", "Reggae", "Gqom", "R&B Hip Hop"]

export default function Genre() {
    const [number, setNumber] = useState<number>(GENRELIST.length)
    return (
        <main className={styles.genre}>
            <div className={styles.genreHeader}>
                <p className={styles.genreHeaderText}>skip</p>
            </div>
            <section className={styles.genreMain}>
                <h1 className={styles.genreMainTitle}>Select your genre</h1>
                <section className={styles.genreMainContent}>
                    {
                        GENRELIST.map((genre, index) => {
                            if (index === number) {
                                return (
                                    <div 
                                        className={styles.genreMainContentItemSelected} 
                                        key={index} 
                                        onClick={() => setNumber(index)}
                                    >
                                        <AiOutlineCheckCircle className={styles.genreMainContentItemSelectedIcon} />
                                        <p className={styles.genreMainContentItemSelectedText}>{genre}</p>
                                    </div>
                                )
                            } else {
                                return (
                                    <div 
                                        className={styles.genreMainContentItem} 
                                        key={index} 
                                        onClick={() => setNumber(index)}
                                    >
                                        <p className={styles.genreMainContentItemText}>{genre}</p>
                                    </div>
                                )
                            }
                        })
                    }
                </section>
                <p className={styles.genreMainText}>For personalised experience*</p>
            </section>
        </main>
    )
}