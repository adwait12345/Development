import {combineReducers} from 'redux';
import { PlatformReducer,selectedPlatformReducer,TokenReducer,selectedTokenReducer, ThemeDarkReducer, selectedThemeDarkReducer,selectedUnderwriteReducer,UnderwriteReducer} from './Reducer';

const reducer = combineReducers({
    allPlatforms:PlatformReducer,
    platform:selectedPlatformReducer,
    allTokens:TokenReducer,
    token:selectedTokenReducer,
    alltheme:ThemeDarkReducer,
    theme:selectedThemeDarkReducer,
    allUnderwrite:UnderwriteReducer,
    underwrite:selectedUnderwriteReducer
})
export default reducer  