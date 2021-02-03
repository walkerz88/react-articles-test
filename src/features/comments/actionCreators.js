import axios from 'axios';

export function fetchComments(postId) {
  return function() {
    return axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(({ data }) => {
        return data;
    });
  };
}