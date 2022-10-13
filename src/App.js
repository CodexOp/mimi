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
    <p>MIMO</p>
    <div className='social'>
      <a href="https://t.me/mimotoken" target="_blank" rel="norefferer"><FaTelegramPlane className='social_icon'/></a>
      <a href="https://twitter.com/mimotoken" target="_blank" rel="norefferer"> <AiOutlineTwitter className='social_icon'/></a>
    </div>
      </div>
      
    <div className="App">

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
      <a href="mailto:info@mimotoken.com"><p>Info@mimotoken.com</p></a>
     </div>
     </div>
    </>
  );
}

export default App;
