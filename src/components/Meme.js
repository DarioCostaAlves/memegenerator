import React,{useState, useEffect} from "react";

export default function Meme(){

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })    

    const [allMemes, setAllMemes] = useState([])
    
    useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    // console.log(allMemes)
    function getMemeImage(){
        
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
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
        console.log(allMemes)
    }
        
    return(
        <main>
            <form onSubmit={handleSubmit}>
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
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}