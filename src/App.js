/* eslint-disable */
import './App.css';
import axios from "axios"
import {AiOutlineLike} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {FaTelegramPlane} from "react-icons/fa"
import {AiTwotoneLike} from "react-icons/ai"
import {React, useState, useEffect} from 'react';
import whitepaper from "./whitepaper.pdf"

function App() {
  
  const [allLiked, setallLiked] = useState();
  const [display, setdisplay] = useState();
  const [liked, setLiked] = useState(true);


    const count = async() => {
      try{
        const res = await axios.get("https://couternew.herokuapp.com/");
        console.log(res)
        getcount();
        }
        catch(err){
          console.log(err)
        }
        }


    const getcount = async() => {
      try{
        const res = await axios.get("https://couternew.herokuapp.com/count");
        console.log(res)
        setallLiked(res.data);
        }
        catch(err){
          console.log(err)
        }
        }


        useEffect(()=>{
          getcount()

        },[])

        useEffect(()=>{
          setLiked(localStorage.getItem('liked'));
        },[count])


    
    const [url, setUrl] = useState(whitepaper);
  
    const handleWhitePaperBtnClick = () => {
      window.open(url, "_blank");
    };
    

  
  return (
    <>
          <div className='nav'>
    <p>MIMO</p>
    <div className='social'>
      
      <button onClick={handleWhitePaperBtnClick} className="whitepaper">  
        Whitepaper
      </button>
      <a href="https://t.me/mimotoken" target="_blank" rel="norefferer"><FaTelegramPlane className='social_icon'/></a>
      <a href="https://twitter.com/mimotoken" target="_blank" rel="norefferer"> <AiOutlineTwitter className='social_icon'/></a>
    </div>
      </div>

      
    <div className="App">
    &nbsp;
    <div className='contract'>

    <p className='address' onClick={() => {navigator.clipboard.writeText('0x97CaA0Dc2E93334C9611e9affd2C7c60440a37Db'); setdisplay("Copied!")}}
>0x97CaA0Dc2E93334C9611e9affd2C7c60440a37Db </p>
<p className='address_small' onClick={() => {navigator.clipboard.writeText('0x97CaA0Dc2E93334C9611e9affd2C7c60440a37Db'); setdisplay("Copied!")}}
>0x97Ca...0a37Db</p>
<div className='copy'>{display}</div>
    </div>

    <ol>
    <li><h2> 1.  No Utility</h2></li>
    <li> <h2> 2.  No Usecase</h2></li>
     <li> <h2>3. Just M</h2></li>
     </ol>
     <p className="description">MIMO token is created as a meme showing a picture of what is important to crypto investors more often.</p>
     {liked ? <AiTwotoneLike className='icon'  onClick={() => setLiked(false)}/> :  <AiOutlineLike className='icon' onClick={() => {setLiked(false); count(); localStorage.setItem('liked', false)}}/>}
     <h2>{allLiked} Liked</h2>

   
    </div>
    <div className='footer_outer'>
    <div className="footer">
      <p>MIMO © 2023</p>
      <a href="mailto:info@mimotoken.com"><p>Info<span className='attherate'>@</span>mimotoken.com</p></a>
     </div>
     </div>
    </>
  );
}

export default App;
