import { Avatar } from '@mui/material'
import React, { useEffect, useState} from 'react';
import "./css/sidebar.css"
function SidebarChat({id,name,addnewchat}) {

const[seed,setSeed] = useState("");
useEffect(()=>{
  setSeed(Math.floor(Math.random()*5000))
},[])
  return (
    !addnewchat ? (
        <div className= "sidebar__chat">
         <Avatar src= {'https://api.dicebear.com/7.x/adventurer/svg?seed=Oliver'}/>
         <div className= "sidebar__chatInfo">
         <h2>{name}</h2>
         <p>Last Message...</p>
         </div>     
    </div>
    
    ) : ( 
    <div className= "sidebar__chat">
       <h2>Add New Chat</h2>
    </div>
    )
    
  )

  
}

export default SidebarChat
