import React from 'react';
import { connect } from 'react-redux';
import { List, Spin } from 'antd';
import { fetchArticles, editArticle, deleteArticle, selectArticleId, showPreview, hidePreview, showEditor, hideEditor } from '../../features/articles';
import { fetchComments } from '../../features/comments';
import { styles } from './styles';
import { selectedArticle } from '../../features/articles';
import ArticleItem from './components/ArticleItem';
import ArticlePreview from './components/ArticlePreview';
import ArticleEditor from './components/ArticleEditor';

class Articles extends React.Component {

  constructor(props) {
    super(props);
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.hidePreview = this.hidePreview.bind(this);
    this.hideEditor = this.hideEditor.bind(this);
    this.state = {
      comments: [],
      commentsLoading: false,
      formLoading: false
    };
  }

  async handleTitleClick (id) {
    this.props.selectArticleId(id);
    this.props.showPreview();
    try {
      this.showCommentsLoading();
      const comments = await this.props.fetchComments(id);
      this.hideCommentsLoading();
      this.setComments(comments);
    } catch (e) {
      console.log(e);
      this.setComments([]);
    }
  }

  setComments (value) {
    this.setState({
      ...this.state,
      comments: value
    });
  }

  showCommentsLoading () {
    this.setState({
      ...this.state,
      commentsLoading: true
    });
  }

  hideCommentsLoading () {
    this.setState({
      ...this.state,
      commentsLoading: false
    });
  }

  showFormLoading () {
    this.setState({
      ...this.state,
      formLoading: true
    });
  }

  hideFormLoading () {
    this.setState({
      ...this.state,
      formLoading: false
    });
  }

  handleEditClick (id) {
    this.props.selectArticleId(id);
    this.props.showEditor();
  }

  async handleSubmitForm (payload) {
    this.showFormLoading();
    await this.props.editArticle(payload);
    this.hideFormLoading();
    this.hideEditor();
  }

  handleDeleteClick (id) {
    if (window.confirm('A you sure you want to delete this article?')) {
      this.props.deleteArticle(id);
    }
  }

  hidePreview () {
    this.props.hidePreview();
  }

  hideEditor () {
    this.props.hideEditor();
  }

  render () {
    const list = this.props.list;
    const loading = this.props.loading;
    const visiblePreview = this.props.visiblePreview;
    const visibleEditor = this.props.visibleEditor;
    const selectedArticle = this.props.selectedArticle;
    const comments = this.state.comments;
    const commentsLoading = this.state.commentsLoading;
    
    return (
      <div className="articles-list">
        {list && list.length
          ? <List
              itemLayout="horizontal"
              dataSource={list}
              renderItem={item => (
                <ArticleItem
                  id={item.id}
                  title={item.title}
                  userId={item.userId}
                  onTitleClick={this.handleTitleClick}
                  onEditClick={this.handleEditClick}
                  onDeleteClick={this.handleDeleteClick}
                />
              )}
            /> : loading
            ? <div style={styles.articlesLoader}>
                <Spin />
              </div> : 'No articles found'}
          {selectedArticle &&
            <>
              <ArticlePreview
                visible={visiblePreview}
                title={selectedArticle.title}
                body={selectedArticle.body}
                comments={comments}
                commentsLoading={commentsLoading}
                onHidePreview={this.hidePreview}
              />
              <ArticleEditor
                key={selectedArticle.id}
                id={selectedArticle.id}
                visible={visibleEditor}
                item={selectedArticle}
                loading={this.state.formLoading}
                onHideEditor={this.hideEditor}
                onSubmitForm={this.handleSubmitForm}
              />
            </>
          }
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchArticles();
  }
};

const mapStateToProps = state => {
  return {
    list: state.articles.list,
    loading: state.articles.loading,
    selectedId: state.articles.selectedId,
    selectedArticle: selectedArticle(state),
    visiblePreview: state.articles.visiblePreview,
    visibleEditor: state.articles.visibleEditor
  }
};

const mapDispatchToProps = { fetchArticles, editArticle, deleteArticle, selectArticleId, showPreview, hidePreview, fetchComments, showEditor, hideEditor };

export default connect(mapStateToProps, mapDispatchToProps)(Articles);