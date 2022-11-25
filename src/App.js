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


    

  
  return (
    <>
          <div className='nav'>
    <p>MIMO</p>
    <div className='social'>
      <a href={whitepaper} target="_blank" rel="noreferrer"><button className="whitepaper" >Whitepaper</button></a>
      <a href="https://t.me/mimotoken" target="_blank" rel="norefferer"><FaTelegramPlane className='social_icon'/></a>
      <a href="https://twitter.com/mimotoken" target="_blank" rel="norefferer"> <AiOutlineTwitter className='social_icon'/></a>
    </div>
      </div>

      
    <div className="App">

    <div className='contract'>
    <p className='address' onClick={() => {navigator.clipboard.writeText('0x3Ad3DD3C4Abf2a91678A5dd4D5CD61e252eB23B6'); setdisplay("Copied!")}}
>0x3Ad3DD3C4Abf2a91678A5dd4D5CD61e252eB23B6 </p>
<p className='address_small' onClick={() => {navigator.clipboard.writeText('0x3Ad3DD3C4Abf2a91678A5dd4D5CD61e252eB23B6'); setdisplay("Copied!")}}
>0x3Ad3D...52eB23B6</p>
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
      <p>MIMO © 2022</p>
      <a href="mailto:info@mimotoken.com"><p>Info<span className='attherate'>@</span>mimotoken.com</p></a>
     </div>
     </div>
    </>
  );
}

export default App;
