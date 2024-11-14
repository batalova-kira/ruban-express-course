"use client";

import { useState } from "react";
import styles from "./lesson.module.css";

type LessonProps = {
    title: string;
    name: string;
};

type LikeState = "unset" | "Liked" | "Dislike";
export function Lesson({ title, name }: LessonProps) {
    const [likeState, setLikeState] = useState<LikeState>("unset");
    const setLike = () => setLikeState("Liked");
    return (
        <div>
            <h2 className={styles.header}>
                {title}{" "}
                <button type="button" onClick={setLike}>
                    {likeState === "unset" ? "like" : likeState}
                </button>
            </h2>
            <h3>{name}</h3>
        </div>
    );
}
