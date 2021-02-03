import API from '../../utils/API';

export function fetchComments(postId) {
  return () => {
    return API.get(`comments?postId=${postId}`)
      .then(({ data }) => {
        return data;
    });
  };
}