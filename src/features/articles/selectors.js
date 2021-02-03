export function selectedArticle(state) {
  return state.articles.list.find(item => item.id === state.articles.selectedId);
}