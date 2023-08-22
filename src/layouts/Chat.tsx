import "../styles/layouts/chat.scss"
import React, {useEffect, useState} from 'react';
import ChatAPI from "../api/ChatAPI";
import MessageDTO from "../api/dto/MessageDTO";
import messageDTO from "../api/dto/MessageDTO";

interface ChatProps {
    playerColor: boolean;
}

const Chat = (props: ChatProps) => {
    const [messages, setMessages] = useState([new MessageDTO("TETS", true)])

    useEffect(() => {
        setMessages(getMessages);
    }, []);
    function getMessages(): MessageDTO[] {
        let messages: messageDTO[] = [];

        ChatAPI.getMessages().then((newMessages) => {
            if (newMessages != null) {
                newMessages.map((message) => messages.push(message));
            }
        });

        return messages;
    }


    return (
        <div className={"chat-container"}>
            <div className={"name"}>
                <h1 className={"text"}>Name</h1>
            </div>
            <div className={"list-message"}>
                {
                    messages.map((message) =>
                        <div key={Math.random()} className={["message", message.color === props.playerColor ? "user-msg" : "enemy-msg"].join(' ')}>{message.text}</div>
                    )
                }
            </div>
            <div className={"form-message"}>
                <input className={"input"} type={"text"}/>
                <button className={"send"}>&#10148;</button>
            </div>
        </div>
    );
};

export default Chat;