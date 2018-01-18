import React from 'react'
import { Button, Icon, Item, Label } from 'semantic-ui-react'
import List from './List';

class ListContainer extends React.PureComponent {
  constructor() {
    super()
    this.state = {
    };
  }

  render() {
    return <List />
  }

}

export default List;
