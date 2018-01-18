import React from 'react'
import Story from './Story'

function List(props) {
  console.log(props.messages)
  const { messages } = props;
  console.log('message', messages)
    return (
        <div>
          {messages.map(m => {
            return <Story story={m} />
          })}
          
</div >
    )
}

export default List;
