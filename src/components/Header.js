import React from 'react'

export default function Header() {
    return(
        <nav className="nav">
            <img className="nav--logo" src="./images/troll-face.png" alt="Logo"/>
            <h2 className="nav--title">Meme Generator</h2>
            <h5 className="nav--course">React Course - Project 3</h5>
        </nav>
    )
}