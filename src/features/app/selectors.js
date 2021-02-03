import {useSelector} from 'react-redux';

/**
 * Custom React Hook to get count value from state.
 * @see https://reactjs.org/docs/hooks-custom.html
 */
const list = () => useSelector(state => state.articles.list);

export default list;