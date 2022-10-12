import './App.css';
import m from "./m.png";
import axios from "axios"
import {AiOutlineLike} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {FaTelegramPlane} from "react-icons/fa"
import {AiTwotoneLike} from "react-icons/ai"
import {React, useState, useEffect} from 'react';

function App() {
  
  const [allLiked, setallLiked] = useState();
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
    <p>MIMI</p>
    <div className='social'>
      <a href="https://t.me/mimotoken" target="_blank" rel="norefferer"><FaTelegramPlane className='social_icon'/></a>
      <a href="https://twitter.com/mimotoken" target="_blank" rel="norefferer"> <AiOutlineTwitter className='social_icon'/></a>
    </div>
      </div>
      
    <div className="App">

      <div className="feature">       
      <h2> <li>No Utility</li></h2>
      <h2> <li>No Usecase</li></h2>
      </div>
      <h2>Just</h2>
     <img src={m} alt='m' />
     <p className="description">MIMO token is created as a meme showing a picture of what is important to crypto investors more often.</p>
     {liked ? <AiTwotoneLike className='icon'  onClick={() => setLiked(false)}/> :  <AiOutlineLike className='icon' onClick={() => {setLiked(false); count(); localStorage.setItem('liked', false)}}/>}
     <h2>{allLiked} Liked</h2>
    </div>
    </>
  );
}

export default App;
