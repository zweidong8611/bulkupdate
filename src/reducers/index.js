import { combineReducers } from 'redux';
import count from './count'
import {reducer as formreducer} from 'redux-form'

export default combineReducers({
    count,
    form: formreducer
})
//posts: postsReducer

