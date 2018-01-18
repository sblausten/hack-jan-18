import React from 'react'

function Messages(props) {
    const { sendMessage } = props;

    return (    
        <div className='Messages'>
            <span>Contact Source: </span>
            <button className='btn btn-primary read' onClick={sendMessage({})} >Read</button>
            <button className=' btn btn-primary investigating'>Investigating</button>
            <button className=' btn btn-primary creating'>Editing</button>
            <button className=' btn btn-primary creating'>Published</button>
            <input type='text'/><button  className='btn btn-dark'type='submit'>Send Custom Msg</button>  
        </div>
            
    )
}

export default Messages;
