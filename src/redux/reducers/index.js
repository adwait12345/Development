import {combineReducers} from 'redux';
import { PlatformReducer,selectedPlatformReducer} from './Reducer';

const reducer = combineReducers({
    allPlatforms:PlatformReducer,
    platform:selectedPlatformReducer,
})
export default reducer 