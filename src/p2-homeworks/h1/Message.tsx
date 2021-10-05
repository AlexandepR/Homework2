import React from 'react'
import classes from './Message.module.css'

type messageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageType) {
    return (
        <div className={classes.message}>
            <div className={classes.avatar}>
                <img
                    src={props.avatar}/>
            </div>
            <div className={classes.messageText}>
                <div className={classes.name}>
                    {props.name}
                </div>
                <div className={classes.messageText}>
                    {props.message}
                </div>
                <div className={classes.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
