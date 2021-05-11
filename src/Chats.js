import React from 'react'
import Chat from './Chat';
import "./Chats.css";

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Sasuke"
                message="Im going to kill Itachi"
                timestamp="30sec ago"
                profilePic="https://sites.google.com/site/matataaaaaaaaaaaaaa/_/rsrc/1467889107313/glavni-geroi/sasuke-uchiha/300px-Sasuke.jpeg"
            />
            <Chat
                name="Itachi"
                message="I have the strongest Susanoo!!!"
                timestamp="1 day ago"
                profilePic="https://www.thenewsfetcher.com/wp-content/uploads/2020/12/Itachi-Uchiha-1-1024x653-1.jpg"
            />
            <Chat
                name="Jiraya"
                message="My time has come. my lif has been nothing but failure"
                timestamp="1 week ago"
                profilePic="https://cdn131.picsart.com/326148718099211.png?type=webp&to=min&r=640"
            />
        </div>
    )
}

export default Chats
