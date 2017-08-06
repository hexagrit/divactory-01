import { combineEpics } from 'redux-observable';

const RANDOM_NUMBER = 'RANDOM_NUMBER';
const RANDOM_NUMBER_COMPLETED = 'RANDOM_NUMBER_COMPLETED';

const randomNumber = () => ({
  type: RANDOM_NUMBER
});

const randomNumberCompleted = (numbers) => ({
  type: RANDOM_NUMBER_COMPLETED,
  payload: {
    numbers
  }
})

const randomNumberEpic = (action$) => {
  return action$.ofType(RANDOM_NUMBER)
    .map(action => {
      const numbers = [11, 11, 11, 11, 11];
      return randomNumberCompleted(numbers);
    })
}

const initialState = {
  numbers: [0, 100, 200, 400]
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case RANDOM_NUMBER_COMPLETED: {
      const { numbers } = action.payload;
      return {
        ...state,
        numbers
      }
    }
    case RANDOM_NUMBER:
    default:
      return state;
  };
};

const actionCreators = {
  randomNumber
};

const actionTypes = {
  RANDOM_NUMBER
};

const actionEpics = combineEpics(
  randomNumberEpic
)

export {
  actionCreators,
  actionTypes,
  actionEpics
};

export default reducers;
