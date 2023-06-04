import HeaderDesktop from "@/components/header/HeaderDesktop";
import Desktop from "@/components/navigation/Desktop";
import styles from "@/styles/Events.module.css";

export default function Events() {
    return (
        <main className={styles.events}>
            <Desktop />
            <section className={styles.eventsMain}>
                <HeaderDesktop />
                <section>
                    <h1>Events here</h1>
                </section>
            </section>
        </main>
    )
}