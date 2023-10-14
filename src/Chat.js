
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./css/chat.css"
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
function Chat() {
  return (
    <div className= "chat">
        <div className= "chat__header">
        <Avatar/>

        <div className= "chat__headerInfo">
            <h3>Room Name</h3>
            <p>Last seen...</p>
        </div>
        <div className= "header__right">
           <IconButton>
            <SearchIcon/>
           </IconButton>

           <IconButton>
            <AttachFileIcon/>
           </IconButton>

           <IconButton>
            <MoreVertIcon/>
           </IconButton>

        </div>
        </div>

        <div className= "chat__body">
            <p className= "chat__message chat__reciever">
                <span className= "chat__name">Gauri Kaushal </span>
                       This is test message
                <span className= "chat__time"> 1:25 AM</span>
            </p>

            <p className= "chat__message ">
                <span className= "chat__name">Gauri Kaushal </span>
                       This is test message
                <span className= "chat__time"> 1:25 AM</span>
            </p>

            <p className= "chat__message ">
                <span className= "chat__name">Gauri Kaushal </span>
                       This is test message
                <span className= "chat__time"> 1:25 AM</span>
            </p>

        </div>

        <div className= "chat__footer">
           <EmojiEmotionsIcon/>
           <AttachFileIcon/>
           <form>
            <input type= "text" placeholder= "Type your message"/>
            <input type= "submit"/>
           </form>
           <MicIcon/>
        </div>
      
    </div>
  )
}

export default Chat
