import {createStore} from 'redux';
import AllReducers from './AllReducers/index';


const store = createStore(
    AllReducers
    // {
    //     First : [{Secname:'AhsanFirstReducer'}],
    //     Second : 'Mikal'
    // }
)
export default store;