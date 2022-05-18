import React from "react";

export default function Meme(){
    function handleClick(){
        console.log("I was clicked!");
    }
    return(
        <main>
            <div className="form">
                <input 
                className="input"
                type="text" 
                placeholder="Top Text"
                />
                <input 
                className="input"
                type="text" 
                placeholder="Bottom Text"
                />
                <button
                onMouseUp={handleClick}
                type="submit"
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}