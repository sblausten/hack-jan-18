import React from 'react'
import List from './List';
import mockData from '../mockData';
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
      messages={mockData}
    />
  }

}

export default ListContainer;
