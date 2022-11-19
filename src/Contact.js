import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styles from "./Contact.module.css"

export default class Contact extends Component {
    render() {
        return (
            <ul className="list" id={styles.contact}>
                <li>
                    <a href="https://t.me/Vatril" target="_blank" rel="noopener noreferrer">Telegram</a>
                </li>
                <li>
                    <a href="https://twitter.com/_vatril_" target="_blank" rel="noopener noreferrer">Twitter</a>
                </li>
                <li>
                    <a href="https://github.com/Vatril" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/nikolai-jay-summers/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li>
                    <a href="https://www.reddit.com/user/Vatril" target="_blank" rel="noopener noreferrer">Reddit</a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer" onClick={() => alert("Vatril#6274")}>Discord</a>
                </li>
                <li>
                    <a rel="me" href="https://meow.social/@vatril">Mastodon</a>
                </li>
                <li>
                    <Link to="/files/nikolaijaysummers.vcf" target="_blank" download>VCard</Link>
                </li>
            </ul>
        )
    }
}
