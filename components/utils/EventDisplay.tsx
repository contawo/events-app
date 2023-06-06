import { BsPin, BsShare } from "react-icons/bs";
import styles from "@/styles/utils/EventDisplay.module.css";
import { EventType } from "@/types/all";

export default function EventDisplay({eventId, eventPrice, dateMonth, dateDay, eventTitle, eventDescription, eventBackground} : EventType) {
    return (
        <section className={styles.eventDisplay}>
            <section 
                className={styles.eventDisplayTop}
                style={{
                    backgroundImage: `url("${eventBackground}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className={styles.eventDisplayTopPrice}>
                    <p className={styles.eventDisplayTopPriceText}>{(eventPrice === 0) ? "Free" : `R${eventPrice}`}</p>
                </div>
                <div className={styles.eventDisplayTopInfo}>
                    <div className={styles.eventDisplayTopInfoPin}>
                        <BsPin className={styles.eventDisplayTopInfoPinIcon} />
                    </div>
                    <div className={styles.eventDisplayTopInfoShare}>
                        <BsShare className={styles.eventDisplayTopInfoShareIcon} />
                    </div>
                </div>
            </section>
            <section className={styles.eventDisplayBottom}>
                <div className={styles.eventDisplayBottomDate}>
                    <p className={styles.eventDisplayBottomDateTitle}>{dateMonth}</p>
                    <p className={styles.eventDisplayBottomDateText}>{dateDay}</p>
                </div>
                <div className={styles.eventDisplayBottomDetails}>
                    <h2 className={styles.eventDisplayBottomDetailsTitle}>{eventTitle}</h2>
                    <p className={styles.eventDisplayBottomDetailsText}>{eventDescription}</p>
                </div>
            </section>
        </section>
    )
}