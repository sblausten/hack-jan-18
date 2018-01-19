import React from 'react'
import Story from './Story'

function List(props) {
  console.log(props.messages)
  const { messages, sendMessage } = props;
  console.log('message', sendMessage)
    return (
        <div>
          {messages.map(m => {
            return <Story story={m} key={m.mid} sendMessage={sendMessage}/>
          })}
    </div>
    )
}

export default List;
