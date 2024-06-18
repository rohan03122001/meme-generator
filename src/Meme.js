import React from "react";
import memesData from "./memesData"

export default function Meme(){

    let [memeInfo, setMemeInfo] = React.useState({
        topText: "",
        bottomText: "",
        url: "https://i.imgflip.com/1ur9b0.jpg"
    })

    
    let [allMemeImages, setAllMemeImages] = React.useState([])
    React.useEffect(()=>{
        fetch(`https://api.imgflip.com/get_memes`)
        .then(res => res.json())
        .then(data=> setAllMemeImages(data.data.memes))
        
    },[])

    console.log(allMemeImages)



    //let [meme, setMeme] = React.useState("")

    function randomMeme(){
        const memeData = allMemeImages.map(item=>{
            return item;
        })
        const url = memeData[Math.floor(Math.random() * memeData.length)].url
        setMemeInfo(prev => ({
            ...prev,
            url: url
        }));

        
        memeInfo.topText =""
        memeInfo.bottomText=""
    }
    
    function handleChange(event){
        const {name, value} = event.target
        setMemeInfo(prev=>{
            return{
                ...prev,
                [name] : value
            }
        })

    }

    return(
        <main>
            <div className="form">
                <input name="topText" onChange={handleChange} className="form--text" placeholder="Top Text"/>
                <input name="bottomText" onChange={handleChange} className="form--text" placeholder="Bottom Text"/>
                <button  onClick={randomMeme} className="form--button">
                    Get a new meme image  🖼
                </button>
            </div>
            <div className="meme">
                <img className="meme--Image" src={memeInfo.url}/>
                <h2 className="meme--text top">{memeInfo.topText}</h2>
                <h2 className="meme--text bottom">{memeInfo.bottomText}</h2>
            </div>
        </main>
    )
}