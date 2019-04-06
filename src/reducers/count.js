import {INC} from './contant'

const initialState = {counter: 1}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case INC:
        return {...state,counter: state.counter+1}
      

  default:
    return state
  }
}

