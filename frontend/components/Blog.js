import React from "react";
import Link from "next/link";
import styles from "../styles/Blog.module.css";

export default function Blog({title, slug, description}) {
    return (
        <Link href={`/posts/${slug}`}>
            <div className={styles.card}>
                <h2>{title}</h2>
                <p className={styles.description}>{description}</p>
            </div>
        </Link>
    )
}