import React from 'react'
import Story from './Story'

function List(props) {
  console.log(props.messages)
  const { messages } = props;
    return (
        <div>
          {messages.map(m => {
            return <Story story={m} key={m.mid} />
          })}
    </div>
    )
}

export default List;
