import {useSelector as useReduxSelector} from 'react-redux';
import isEqual from 'react-fast-compare';
import {RootState} from './store';

function useSelector<T>(
  selector: (state: RootState) => T,
  equalityFn = isEqual,
): T {
  return useReduxSelector<RootState, T>(selector, equalityFn);
}

export {useSelector};
