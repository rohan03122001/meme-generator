import React from "react";
import memesData from "./memesData"

export default function Meme(){

    let [memeInfo, setMemeInfo] = React.useState({
        topText: "",
        bottomText: "",
        url: "https://i.imgflip.com/1ur9b0.jpg"
    })

    let [allMemeImages, setAllMemeImages] = React.useState(memesData)

    //let [meme, setMeme] = React.useState("")

    function randomMeme(){
        const memeData = allMemeImages.data.memes.map(item=>{
            return item;
        })
        const url = memeData[Math.floor(Math.random() * memeData.length)].url
        setMemeInfo(prev => ({
            ...prev,
            url: url
        }));
    }
    
    return(
        <main>
            <div className="form">
                <input className="form--text" placeholder="Top Text"/>
                <input className="form--text" placeholder="Bottom Text"/>
                <button onClick={randomMeme} className="form--button">
                    Get a new meme image  🖼
                </button>
            </div>
            <img className="memeImage" src={memeInfo.url}/>
        </main>
    )
}