import React from 'react'
import List from './List';
import mockData from '../mockData';

class ListContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return <List messages={mockData}/>
  }

}

export default ListContainer;
