import styles from "@/styles/events/EventsList.module.css";
import { FaChevronDown } from "react-icons/fa";
import EventDisplay from "../utils/EventDisplay";
import { EventType } from "@/types/all";

const eventList : EventType[] = [
    {
        eventId: "12",
        dateMonth: "SEP",
        dateDay: 12,
        eventTitle: "Get together summer",
        eventDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, soluta.",
        eventBackground: "https://images.unsplash.com/photo-1516981442399-a91139e20ff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        eventPrice: 0
    },
    {
        eventId: "23",
        dateMonth: "MAR",
        dateDay: 15,
        eventTitle: "The dance challenge",
        eventDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, soluta.",
        eventBackground: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        eventPrice: 12
    },
]

export default function EventsList() {
    return (
        <section className={styles.eventsList}>
            <section className={styles.eventsListTop}>
                <h1 className={styles.eventsListTopTitle}>Events</h1>
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
            <section className={styles.eventsListItems}>
                {
                    eventList.map((event) => {
                        return (
                            <EventDisplay 
                                key={event.eventId} 
                                eventId={event.eventId}
                                eventPrice={event.eventPrice}
                                dateMonth={event.dateMonth}
                                dateDay={event.dateDay}
                                eventTitle={event.eventTitle}
                                eventDescription={event.eventDescription}
                                eventBackground={event.eventBackground}
                            />
                        )
                    })
                }
            </section>
        </section>
    )
}