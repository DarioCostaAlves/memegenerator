import React,{useState} from "react";
import memesData from "../memesData"

export default function Meme(){
    const [memeImage, setMemeImage] = useState("")    
    
    function getMemeImage(){
        let memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
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
                onClick={getMemeImage}               
                type="submit"
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} className="meme--image"/>
        </main>
    )
}