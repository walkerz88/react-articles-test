import axios from 'axios';
import {SET_ARTICLES, SELECT_ID, SET_PREVIEW_VISIBILITY, SET_EDITOR_VISIBILITY} from './actionTypes';

export function fetchArticles() {
  return function(dispatch) {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => {
        dispatch(setArticles(data));
    });
  };
}

export function editArticle(payload) {
  return function(dispatch, getState) {
    return axios.patch(`https://jsonplaceholder.typicode.com/posts/${payload.id}`, {
      title: payload.title,
      body: payload.body
    }).then(({ data }) => {
        const id = data.id;
        let list = getState().articles.list;
        let index = list.findIndex(item => item.id === id);
        list[index] = data;
        dispatch(setArticles(list));
    });
  };
}

export function deleteArticle(id) {
  return function(dispatch, getState) {
    return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        let list = getState().articles.list;
        list = list.filter(item => item.id !== id);
        dispatch(setArticles(list));
    });
  };
}

export function setArticles(data) {
  return {
    type: SET_ARTICLES,
    value: data
  }
}

export function selectArticleId(data) {
  return {
    type: SELECT_ID,
    value: data
  }
}

export function showPreview() {
  return {
    type: SET_PREVIEW_VISIBILITY,
    value: true
  }
}

export function hidePreview() {
  return {
    type: SET_PREVIEW_VISIBILITY,
    value: false
  }
}

export function showEditor() {
  return {
    type: SET_EDITOR_VISIBILITY,
    value: true
  }
}

export function hideEditor() {
  return {
    type: SET_EDITOR_VISIBILITY,
    value: false
  }
}