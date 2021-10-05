import React from 'react'
import Message from './Message';


const messageData = {
    avatar: 'https://i.pinimg.com/736x/a8/53/87/a85387440d54d8536c1f66b8eb8b2268--line-sketch-pencil.jpg',
    name: 'Alice',
    message: 'Hey there! How are you doing?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*<hr/>*/}
            {/*/!*для личного творчества, могу проверить*!/*/}
            {/*/!*<AlternativeMessage/>*!/*/}
            {/*<hr/>*/}
        </div>
    )
}


export default HW1
