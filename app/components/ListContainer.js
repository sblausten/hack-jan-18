import React from 'react'
import { Button, Icon, Item, Label } from 'semantic-ui-react'
import List from './List';
import { markAsRead, receiveMessage } from './state';
import createClient from './socket-client';

class ListContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      messages: [],
    };

    this.client = createClient();
    this.client.onMessage(message => {
      console.log('recieved',message);
      this.setState(receiveMessage(message));

    });
    // this.client.sendMessage({text: 'hello', recipient: '' })
  }

  render() {
    return <List
      markAsRead={mid => {}}
      sendMessage={this.client.sendMessage}
    />
  }

}

export default ListContainer;
