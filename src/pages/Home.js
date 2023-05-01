import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';




const Home = () => {
   
  const navigate = useNavigate();
  const[roomID,setRoomID] = useState('');
  const[Username,setUsername] = useState('');
  
      const createNewRoom = (e) => {
          // we do this to prevent refreshing the page
          e.preventDefault();
          const id = uuidv4();
          setRoomID(id);
          toast.success('Created a new room'); 
          // console.log(id);
      };

      const joinRoom = () => {
        if(!roomID || !Username)
        {
          toast.error('ROOM ID & username is required');
          return;
        }

        //Redirect
        navigate(`/editor/${roomID}`,{
            state:{
                Username,
            }
        })


      };

      const handleEnter = (e) =>{
          // console.log('event',e.code);
          if(e.code==='Enter')
          {
            joinRoom();
          }

      };


  return <div className="homePageWrapper">

       <div className="formWrapper">

        <img className="homePageLogo" src="/code-sync.png" alt="code-sync-logo"></img>
        <h4>Paste invitation ROOM ID</h4>
        <div className="inputGroup">

         <input
            type = "text"
            className="inputBox"
            placeholder="ROOM ID"  
            onChange={(e) => setRoomID(e.target.value)}
            value={roomID}
            onKeyUp={handleEnter}
         />
          <input
            type = "text"
            className="inputBox"
            placeholder="USERNAME" 
            onChange={(e) => setUsername(e.target.value)}
            value={Username}
            onKeyUp={handleEnter} 
         />
         <button className="btn joinBtn" onClick={joinRoom}>Join</button>
         <span className="create Info">
          If you don't have an invite then create &nbsp;
          <a onClick={createNewRoom} href="" className="createNewBtn">
            new room
          </a>
         </span>
        </div>
       
       </div>
          <footer>
            <h4>Built by <a href="https://github.com/RitikGandhi21">Ritik Gandhi</a> </h4>
          </footer>
         </div>
}

export default Home
