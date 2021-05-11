import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./chatScreen.css"
function ChatScreen() {
    const [messages, setMessages]= useState([
        {
            name: 'Sasuke',
            image: 'https://sites.google.com/site/matataaaaaaaaaaaaaa/_/rsrc/1467889107313/glavni-geroi/sasuke-uchiha/300px-Sasuke.jpeg',
            message: 'Im going to kill Itachi',
        },
        {
            message: "Aye Susuke i'll  bring yout back",
        }
    ])

    const [input, setInput] = useState('');

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You are in conversation with Sasuke </p>
            {
                messages.map(message => (
                    message.name ? (
                        <div className="chatScreen__message">
                            <Avatar
                                className="chatScreen__image"
                                alt={message.name}
                                src={message.image}
                            />
                            <p className="chatScreen__text">{message.message}</p>
                        </div>
                    ) : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__text__user">{message.message}</p>
                        </div>
                    )
                    
                ))
            }
            <form className="chatscreen__input">
                <input 
                    onChange={(e)=> setInput(e.target.value)} 
                    value={input} 
                    placeholder="Type a message" 
                    className="chatscreen__inputField"
                />
                <button onClick={handleSend} className="chatscreen__inputButton">Send</button>
            </form>
        </div>
    )
}

export default ChatScreen
