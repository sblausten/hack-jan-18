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
    this.client.onMessage(message => this.setState(receiveMessage(message)));
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
