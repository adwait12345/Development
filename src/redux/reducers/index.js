import {combineReducers} from 'redux';
import { PlatformReducer,selectedPlatformReducer,TokenReducer,selectedTokenReducer} from './Reducer';

const reducer = combineReducers({
    allPlatforms:PlatformReducer,
    platform:selectedPlatformReducer,
    allTokens:TokenReducer,
    token:selectedTokenReducer
})
export default reducer 