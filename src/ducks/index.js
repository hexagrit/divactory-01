import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { default as number, actionEpics as numberEpic } from './number';

export const rootReducer = combineReducers({
  number
})

// root epics here
export const rootEpic = combineEpics(
  numberEpic
);

export default rootReducer;
