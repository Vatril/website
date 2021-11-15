import React, {Component} from 'react'

export default class Home extends Component {
    render() {
        return (
            <>
                <p>
                    Hello!
                </p>
                <p>
                    My Name is Nikolai, I am
                    {" " +
                    Math.abs(
                        new Date(
                            Date.now() - new Date(1997, 9, 6)
                        ).getUTCFullYear() - 1970
                    ) + " "
                    }
                    and a dev. This website mainly exists because I need a server for testing and why not host a website
                    on it.
                </p>
                <p>
                    I am currently working as a Data Engineer!
                </p>
                <p>
                    My main languages are Python and JavaScript.
                </p>
                <p>
                    I mostly work with data pipelines and create various webapps.
                    Never tired of trying out new things tho!
                </p>
                <p>
                    When I am not programming, you will find me playing tabletop games or
                    preparing the next session.
                </p>
            </>
        )
    }
}
