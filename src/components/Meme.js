import React,{useState} from "react";
import memesData from "../memesData"

export default function Meme(){
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })    

    const [allMemeImages, setAllMemeImages] = useState(memesData)
    
    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }
        
    return(
        <main>
            <div className="form">
                <input 
                className="input"
                type="text" 
                placeholder="Top Text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />
                <input 
                className="input"
                type="text" 
                placeholder="Bottom Text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />
                <button 
                onClick={getMemeImage}               
                type="submit"
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image"/>
        </main>
    )
}