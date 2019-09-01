import React, { Component } from 'react'
import styles from "./Imprint.module.css"

export default class Imprint extends Component {
    render() {
        return (
            <ul className="list" id={styles.imprint}>
                <li>Owner: Nikolai Jay Summers</li>
                <br />
                <li>Address:
                    <ul className="list">
                        <li>Zwinglistr. 5</li>
                        <li>10555 Berlin</li>
                        <li>Germany</li>
                    </ul>
                </li>
                <br />
                <a href="mailto:nikolaisummers@gmail.com">
                    <li>Email: nikolaisummers@gmail.com</li>
                </a>
                <br />
                <li>Telephone: 4915779603374</li>
            </ul>
        )
    }
}
