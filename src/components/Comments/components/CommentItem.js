import React from 'react';
import { List } from 'antd';

class CommentItem extends React.Component {

  render () {
    return (
      <List.Item>
        <List.Item.Meta
          title={this.props.name}
          description={this.props.email}
        />
        {this.props.body}
      </List.Item>
    );
  }
}

export default CommentItem;