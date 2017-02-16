// The master reducer doesnt manage any state on its own.
// It manages all the reducers. The reducers manage state,
// the master reducer manages all the reducers

import GetHomeReducer from './GetHomeReducer'
import RegisterReducer from './RegisterReducer'
import LoginReducer from './LoginReducer'
import {combineReducers} from 'redux';


const rootReducer = combineReducers({
	home: GetHomeReducer,
	register: RegisterReducer,
	login: LoginReducer
})
export default rootReducer;