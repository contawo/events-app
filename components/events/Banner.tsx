'use client';

import styles from "@/styles/events/Banner.module.css";
import { BsSearch } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import {useState} from "react";

export default function Banner() {
    const [number, setNumber] = useState<number>(0)
    setTimeout(() => {
      if (number < 2) {
        setNumber(number + 1)
      } else {
        setNumber(0)
      }
    }, 2000)

    return (
        <section className={styles.banner}>
            <div className={styles.bannerContainer}>
                <div className={styles.bannerContainerOverlap}>l</div>
                <div className={styles.bannerContainerTitle}>
                    <span className={styles.bannerContainerTitleText}>Let us help you</span>
                    <span 
                        className={styles.bannerContainerTitleTextMain}
                        style={{
                            color: (number === 0) ? 'rgb(216, 0, 0)' : "",
                            transition: ".3s all ease-in-out"
                          }}
                    >Locate</span>
                    <span 
                        className={styles.bannerContainerTitleTextMain}
                        style={{
                            color: (number === 1) ? '#0085D1' : "",
                            transition: ".3s all ease-in-out"
                          }}
                    >Your</span>
                    <span 
                        className={styles.bannerContainerTitleTextMain}
                        style={{
                            color: (number === 2) ? '#FFA600' : "",
                            transition: ".3s all ease-in-out"
                          }}
                    >Events...</span>
                    <p className={styles.bannerContainerText}>All your favourite events in one place.</p>
                </div>
            </div>
            <div className={styles.bannerSearch}>
                <div className={styles.bannerSearchContainer}>
                    <div className={styles.bannerSearchContainerField}>
                        <input 
                            className={styles.bannerSearchContainerFieldInput} 
                            type="text" placeholder="Select event category"  />
                        <FaChevronDown className={styles.bannerSearchContainerFieldIcon} />
                    </div>
                    <div className={styles.bannerSearchContainerDate}>
                        <input id="datePick" className={styles.bannerSearchContainerDateInput} type="date" placeholder="Choose event date..." onFocus={(e) => (e.target.type = "date")} />
                    </div>
                    <div className={styles.bannerSearchContainerCity}>
                        <input 
                            className={styles.bannerSearchContainerCityInput} 
                            type="text" placeholder="Type event city..." />
                    </div>
                    <div className={styles.bannerSearchContainerSubmit}>
                        <BsSearch className={styles.bannerSearchContainerSubmitIcon} />
                    </div>
                </div>
            </div>
        </section>
    )
}