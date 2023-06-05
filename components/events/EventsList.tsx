import styles from "@/styles/events/EventsList.module.css";
import { FaChevronDown } from "react-icons/fa";

export default function EventsList() {
    return (
        <section className={styles.eventsList}>
            <section className={styles.eventsListTop}>
                <h1 className={styles.eventsListTopTitle}>View events</h1>
                <section className={styles.eventsListTopToggle}>
                    <div className={styles.eventsListTopToggleItem}>
                        <p className={styles.eventsListTopToggleItemText}>Monday</p>
                        <FaChevronDown className={styles.eventsListTopToggleItemIcon} />
                    </div>
                    <div className={styles.eventsListTopToggleItem}>
                        <p className={styles.eventsListTopToggleItemText}>Event Type</p>
                        <FaChevronDown className={styles.eventsListTopToggleItemIcon} />
                    </div>
                    <div className={styles.eventsListTopToggleItem}>
                        <p className={styles.eventsListTopToggleItemText}>Time</p>
                        <FaChevronDown className={styles.eventsListTopToggleItemIcon} />
                    </div>
                </section>
            </section>
        </section>
    )
}