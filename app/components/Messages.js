import React from 'react'

function Messages(props) {

    return (    
        <div className='Messages'>
            <span>Contact Source: </span>
            <button className='read'>Read</button>
            <button className='investigating'>Investigating</button>
            <button className='creating'>Editing</button>
            <button className='creating'>Published</button>
            <input type='text'/><button type='submit'>Send Custom Msg</button>
        </div>
            
    )
}

export default Messages;
