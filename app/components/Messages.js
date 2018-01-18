import React from 'react'

const message = {
    read: 'Your comment has been read.',
    investigating: 'We are now investigating your story',
    writing: 'A journalist is now writing your article',
    publish: 'You article is now published'
}

function Messages(props) {
    const { sendMessage } = props;

    return (    
        <div className='Messages'>
            <span>Contact Source: </span>
            <button className='btn btn-primary read' onClick={sendMessage({ text: message.read })} >Read</button>
            <button className=' btn btn-primary investigating' onClick={sendMessage({ text: message.investigating })}>Investigating</button>
            <button className=' btn btn-primary writing' onClick={sendMessage({ text: message.writing })}>Editing</button>
            <button className=' btn btn-primary published' onClick={sendMessage({ text: message.published })}>Published</button>
            <input type='text'/><button  className='btn btn-dark'type='submit'>Send Custom Msg</button>  
        </div>
            
    )
}

export default Messages;
