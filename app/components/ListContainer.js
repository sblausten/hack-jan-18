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
    this.client.onMessage(message => this.setState(receiveMessage(message)));
  }

  render() {
    return <List
      markAsRead={mid => {}}
      sendMessage={this.client.sendMessage}
    />
  }

}

export default List;
