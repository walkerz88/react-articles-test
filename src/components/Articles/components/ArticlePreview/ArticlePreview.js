import React from 'react';
import { Modal, Divider } from 'antd';
import Comments from '../../../Comments';

class ArticlePreview extends React.Component {

  constructor(props) {
    super(props);
    this.hidePreview = this.hidePreview.bind(this);
  }

  hidePreview () {
    this.props.onHidePreview();
  }

  render () {
    return (
      <Modal
        title={this.props.title}
        visible={this.props.visible}
        onCancel={this.hidePreview}
        onOk={this.hidePreview}
        footer={null}
      >
        <p>{this.props.body}</p>
        {!this.props.commentsLoading ?
          <>
            <Divider />
            <h4>Comments {this.props.comments && this.props.comments.length > 1 && `(${this.props.comments.length})`}</h4>
          </> : null
        }
        <Comments
          list={this.props.comments}
          loading={this.props.commentsLoading}
        />
      </Modal>
    );
  }
}

export default ArticlePreview;