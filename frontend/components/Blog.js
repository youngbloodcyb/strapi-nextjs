import React from "react";
import Link from "next/link";

export default function Blog({title, slug, description}) {
    return (
        <Link href={`/posts/${slug}`}>
            <div className="">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </Link>
    )
}