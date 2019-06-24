import FirstReducer from './FirstReducer';
import SecondReducer from './SecondReducer';
import {combineReducers} from 'redux';
const AllReducer = combineReducers({
    First : FirstReducer,
    Second : SecondReducer
})
export default AllReducer;