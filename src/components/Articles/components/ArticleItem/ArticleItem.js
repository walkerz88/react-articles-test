import React from 'react';
import { List, Button, Tooltip } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

class ArticleItem extends React.Component {
  handleTitleClick (e) {
    e.preventDefault();
    this.props.onTitleClick(this.props.id)
  }

  handleEditClick () {
    this.props.onEditClick(this.props.id);
  }

  handleDeleteClick () {
    this.props.onDeleteClick(this.props.id);
  }

  render () {
    const title = this.props.title;
    const userId = this.props.userId;

    return (
      <List.Item
        actions={[
          <Tooltip title="Edit">
            <Button
              shape="circle"
              icon={<EditOutlined />}
              onClick={() => this.handleEditClick()}
            />
          </Tooltip>,
          <Tooltip title="Delete">
            <Button
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => this.handleDeleteClick()}
            />
          </Tooltip>
        ]}
      >
        <List.Item.Meta
          title={<button className="title-link" onClick={e => this.handleTitleClick(e)}>{title}</button>}
          description={`Author ID: ${userId}`}
        />
      </List.Item>
    );
  }
}

export default ArticleItem;