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
    const title = this.props.title;
    const visible = this.props.visible;
    const body = this.props.body; 
    const comments = this.props.comments;
    const commentsLoading = this.props.commentsLoading;

    return (
      <Modal
        title={title}
        visible={visible}
        onCancel={this.hidePreview}
        onOk={this.hidePreview}
        footer={null}
      >
        <p>{body}</p>
        {!commentsLoading ?
          <>
            <Divider />
            <h4 className="bold">Comments {comments && comments.length > 1 && `(${comments.length})`}</h4>
          </> : null
        }
        <Comments
          list={comments}
          loading={commentsLoading}
        />
      </Modal>
    );
  }
}

export default ArticlePreview;