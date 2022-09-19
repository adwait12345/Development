import {combineReducers} from 'redux';
import { PlatformReducer,selectedPlatformReducer,TokenReducer,selectedTokenReducer, ThemeDarkReducer, selectedThemeDarkReducer,selectedUnderwriteReducer,UnderwriteReducer,ProtocalReducer,selectedProtocalReducer,cTokenReducer,selectedcTokenReducer} from './Reducer';

const reducer = combineReducers({
    allPlatforms:PlatformReducer,
    platform:selectedPlatformReducer,
    allTokens:TokenReducer,
    token:selectedTokenReducer,
    alltheme:ThemeDarkReducer,
    theme:selectedThemeDarkReducer,
    allUnderwrite:UnderwriteReducer,
    underwrite:selectedUnderwriteReducer,
    allProtocol:ProtocalReducer,
    Protocal:selectedProtocalReducer,
    allcTokens:cTokenReducer,
    ctoken:selectedcTokenReducer,
})
export default reducer  