import { ActionTypes } from "../Action-Types/action-type";

export const setPlatform = (Platform) => {
    // console.log(Platform)
  return {
    type: ActionTypes.SET_PLATFORM,
    payload: Platform,
  };
};

export const selectedPlatform = (sPlatform) => {
  return {
    type: ActionTypes.SELECTED_PLATFORM,
    payload: sPlatform,
  };
};

export const setToken = (Token) => {
  return {
    type: ActionTypes.SET_TOKEN,
    payload: Token,
  };
};

export const selectedToken = (sToken) => {
  return {
    type: ActionTypes.SELECTED_TOKEN,
    payload: sToken,
  };
};


export const setThemeDark= (Theme)=>{
  return {
    type: ActionTypes.SET_LIGHT,
    payload:Theme
  }
}
export const setThemeLight= (Theme)=>{
  return {
    type: ActionTypes.SET_LIGHT,
    payload:Theme
  }
}