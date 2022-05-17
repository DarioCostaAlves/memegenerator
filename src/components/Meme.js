import React from "react";

export default function Meme(){
    return(
        <main>
            <form>
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
                type="submit"
                >
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}