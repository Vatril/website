import React, { Component } from 'react'
import styles from "./Nav.module.css"

export default class Nav extends Component {
    render() {
        return (
            <ul id={styles.menu}>
                <li>
                    <a href="/">Home</a>
                </li>
                {window.location.href.includes("furry") && <li>
                    <a href="/sona">Sona</a>
                </li>}
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/imprint">Imprint</a>
                </li>
            </ul>
        )
    }
}
