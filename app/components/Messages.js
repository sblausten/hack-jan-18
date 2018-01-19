import React from 'react'

const message = {
    read: 'Your comment has been read.',
    investigating: 'We are now investigating your story',
    writing: 'A journalist is now writing your article',
    publish: 'You article is now published'
}

function Messages(props) {
    const { sendMessage, sender } = props;
    const { id } = sender;

    return (    
        <div className={`Messages Message-${id}`}>
            <span>Contact Source: </span>
            <button className='btn btn-primary read' onClick={() => sendMessage({ sid: id, text: message.read })} >Read</button>
            <button className=' btn btn-primary investigating' onClick={() => sendMessage({ sid: id, text: message.investigating })}>Investigating</button>
            <button className=' btn btn-primary writing' onClick={() => sendMessage({ sid: id, text: message.writing })}>Editing</button>
            <button className=' btn btn-primary published' onClick={() => sendMessage({ sid: id, text: message.published })}>Published</button>
            <input id={`free-text-${id}`} type='text'/><button  className='btn btn-dark'type='submit' onClick={() => sendMessage({ sid: id, text: document.getElementById(`free-text-${id}`).value })}>Send Custom Msg</button>  
        </div>
            
    )
}

export default Messages;
