// The master reducer doesnt manage any state on its own.
// It manages all the reducers. The reducers manage state,
// the master reducer manages all the reducers

import GetHomeReducer from './GetHomeReducer'
import {combineReducers} from 'redux';


const rootReducer = combineReducers({
	home: GetHomeReducer
})
export default rootReducer;