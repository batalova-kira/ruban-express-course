import styles from "./page.module.css";
import course from "./course.json";
export default function Home() {
    return (
        <main className={styles.main}>
            <ul>
                {course.lessons.map((lesson) => {
                    return (
                        <li key={lesson.name}>
                            <h3>{lesson.title}</h3>
                            <p>{lesson.name}</p>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}
