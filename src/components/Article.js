import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}•{minutes < 30 ? "☕️".repeat(Math.ceil(minutes / 5)) : "🍱".repeat(Math.ceil(minutes / 10))}{minutes + " min read"}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;