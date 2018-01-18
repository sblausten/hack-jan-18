import React from 'react'
import Messages from './Messages';

function Story(props) {

  const { story } = props;

    return (
        <div className='story'>
            <div className='story-overview'>
                <span>Story Suggestion:</span>{story.text}
            </div >
            <Messages />
        </div>

    )
}

export default Story;
