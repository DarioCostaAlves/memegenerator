import React from 'react'

export default function Header() {
    function handleOver() {
        console.log("I found the poker face!")
    }
    return(
        <nav className="nav">
            <img onMouseOver={handleOver} className="nav--logo" src="./images/troll-face.png" alt="Logo"/>
            <h2 className="nav--title">Meme Generator</h2>
            <h5 className="nav--course">React Course - Project 3</h5>
        </nav>
    )
}