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
    type: ActionTypes.SET_DARK,
    payload:Theme
  }
}
export const selectedThemeDark= (Theme)=>{
  return {
    type: ActionTypes.SELCTED_DARK,
    payload:Theme
  }
}

export const setUnderwrite= (Underwrite) => {
  // console.log(Platform)
  return {
    type: ActionTypes.SET_UNDERWRITE,
    payload: Underwrite,
  };
};

export const selectedUnderWrite = (sUnderite) => {
  return {
    type: ActionTypes.SELECTED_UNDERWRITE,
    payload: sUnderite,
  };
};