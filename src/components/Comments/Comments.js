import React from 'react';
import { List, Spin } from 'antd';
import CommentItem from './components/CommentItem';
import { styles } from './styles';

class Comments extends React.Component {

  render () {
    const list = this.props.list;
    const loading = this.props.loading;

    return (
      <div className="comments-list">
        {loading ?
          <div style={styles.commentsLoader}>
            <Spin />
          </div> : list && list.length
          ? <List
              itemLayout="horizontal"
              dataSource={list}
              renderItem={item => <CommentItem name={item.name} email={item.email} body={item.body} />}
            /> : 'No comments yet'}
      </div>
    );
  }
};

export default Comments;