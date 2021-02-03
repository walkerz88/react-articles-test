import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import list from './selectors';
import {FETCH_LIST} from './actionTypes';

const useActions = () => {
  const dispatch = useDispatch();
  const list = list();
  const fetchList = useCallback(() => {
    dispatch({
      type: FETCH_LIST,
      value: count + 1,
    });
  }, [count, dispatch]);
  return {fetchList};
};

export default useActions;