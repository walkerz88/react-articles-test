import React from 'react';
import { Modal, Input, Button } from 'antd';
import { styles } from './styles';

class ArticlePreview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.hideEditor = this.hideEditor.bind(this);
  }

  hideEditor () {
    this.props.onHideEditor();
  }

  submitForm () {
    this.props.onSubmitForm(this.state.item);
  }
  
  handleChange(e) {
    
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      item: {
        ...this.state.item,
        [name]: value
      }
    });
  }

  render () {
    const loading = this.props.loading;

    return (
      <Modal
        title="Edit article"
        visible={this.props.visible}
        onCancel={this.hideEditor}
        footer={[
          <Button
            key="back"
            onClick={this.hideEditor}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={this.submitForm}
          >
            Submit
          </Button>,
        ]}
      >
        <div style={styles.formControl}>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.item.title}
            onChange={this.handleChange} 
          />
        </div>
        <Input.TextArea
          name="body"
          placeholder="Article text"
          style={styles.textArea}
          value={this.state.item.body}
          onChange={this.handleChange}
        />
      </Modal>
    );
  }
}

export default ArticlePreview;