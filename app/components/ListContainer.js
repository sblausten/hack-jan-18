import React from 'react'
import List from './List';
import mockData from '../mockData';
import { markAsRead, receiveMessage } from './state';

class ListContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };

    props.client.onMessage(message => {
      console.log('recieved',message);
      if(message.message.text){
          this.setState({messages:[message,...this.state.messages]});
          console.log(this.state)

      }
    });
    // this.client.sendMessage({text: 'hello', recipient: '' })
  }

  render() {
    return <List
      markAsRead={mid => {}}
      sendMessage={this.props.client.sendMessage}
      messages={this.state.messages}
    />
  }

}

export default ListContainer;




