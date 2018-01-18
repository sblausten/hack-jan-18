import React from 'react'
import { Button, Icon, Item, Label } from 'semantic-ui-react'

function List(props) {
    return (
        <Item.Group divided>
    <Item>
      <Item.Content>
        <Item.Header as='a'>12 Years a Slave</Item.Header>
        <Item.Meta>
          <span className='cinema'>Union Square 14</span>
        </Item.Meta>
        <Item.Description>hey</Item.Description>
        <Item.Extra>
          <Label>IMAX</Label>
          <Label icon='globe' content='Additional Languages' />
        </Item.Extra>
      </Item.Content>
    </Item>
</Item.Group >
    )
}

export default List;
