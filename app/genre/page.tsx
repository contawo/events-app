'use client';

import { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import styles from "@/styles/Genre.module.css";
import { useRouter } from "next/navigation";
import {useEffect} from "react";

const GENRELIST : Array<string> = ["Amapiano", "Hip Hop", "House", "Jazz", "Gospel", "Afropop", "DeepHouse", "Soul Music", "Rock", "Reggae", "Gqom", "R&B Hip Hop"]

export default function Genre() {
    const [number, setNumber] = useState<number>(GENRELIST.length)
    const [selected, setSelected] = useState<string>("");
    const [text, setText] = useState("Select your genre")
    const router = useRouter();

    const submitGenre = () => {
        if (selected === "") {
            setText("Please select genre")
            return
        } else {
            setText("Select your genre")
            router.push("/events")
        }
    }

    // useEffect(() => {
    //     location.reload()
    //   }, [])
    
    return (
        <main className={styles.genre}>
            <div className={styles.genreHeader}>
                <p className={styles.genreHeaderText} onClick={() => router.push("/events")}>skip instead</p>
            </div>
            <section className={styles.genreMain}>
                <h1 className={styles.genreMainTitle}>{text}</h1>
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
                                        onClick={() => {
                                            setNumber(index)
                                            setSelected(genre)
                                        }}
                                    >
                                        <p className={styles.genreMainContentItemText}>{genre}</p>
                                    </div>
                                )
                            }
                        })
                    }
                </section>
                <div className={styles.genreMainContainer}>
                    <button 
                        className={styles.genreMainContainerButton} 
                        type="button"
                        onClick={submitGenre}
                    >Continue</button>
                    <p className={styles.genreMainContainerText}>For personalised experience*</p>
                </div>
            </section>
        </main>
    )
}