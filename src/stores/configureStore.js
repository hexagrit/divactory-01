import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../ducks';
import epicMiddleware from '../middlewares/epic';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(epicMiddleware)
  )
};
