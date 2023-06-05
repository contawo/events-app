import Banner from "@/components/events/Banner";
import EventsList from "@/components/events/EventsList";
import HeaderDesktop from "@/components/header/HeaderDesktop";
import Desktop from "@/components/navigation/Desktop";
import styles from "@/styles/Events.module.css";

export default function Events() {
    return (
        <main className={styles.events}>
            <Desktop />
            <section className={styles.eventsMain}>
                <HeaderDesktop />
                <section className={styles.eventsMainContent}>
                    <Banner />
                    <EventsList />
                </section>
            </section>
        </main>
    )
}