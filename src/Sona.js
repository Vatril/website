import React, { Component } from 'react'
import styles from "./Sona.module.css"

export default class Sona extends Component {

    constructor(props) {
        super(props)

        this.state = {
            images: []
        }
    }


    componentDidMount() {
        fetch('/sona_files/sona.json').then(res => res.json()).then(json => this.setState({ images: json }))
    }

    render() {
        return (
            <>
                <div className="row">
                    <h2>Images drawn for me.</h2>
                </div>
                <div id={styles.sonalist}>
                    {this.state.images.map(image => (
                        <div className={styles.image}>
                            <a href={image.artist_link} target="_blank" rel="noopener noreferrer" >
                                <img className={styles.sonaimage} src={`/sona_files/${image.image.file}`} alt={image.name} />
                                <h3>{`${image.name} by ${image.artist}`}</h3>
                            </a>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}
