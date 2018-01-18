import React from 'react'

function Story(props) {

  const { story } = props;

    return (    
        <div className='story'>
            <button onClick>Mark as Read</button>
            <ul className='story-overview'>
                <span>Topic:</span> {story.message.text}
            </ul >
        </div>
            
    )
}

export default Story;
