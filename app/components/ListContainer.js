import React from 'react'
import { Button, Icon, Item, Label } from 'semantic-ui-react'
import List from './List';
import { markAsRead, receiveMessage } from './state';

class ListContainer extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      messages: [],
    };
  }

  render() {
    return <List
      markAsRead={mid => this.setState(markAsRead(mid))}
      recieveMessage={message => this.setState(receiveMessage(message))}
    />
  }

}

export default List;
