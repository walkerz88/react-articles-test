import React from 'react';
import { List } from 'antd';

class CommentItem extends React.Component {

  render () {
    const name = this.props.name;
    const email = this.props.email;
    const body = this.props.body;

    return (
      <List.Item>
        <List.Item.Meta
          title={name}
          description={email}
        />
        {body}
      </List.Item>
    );
  }
}

export default CommentItem;