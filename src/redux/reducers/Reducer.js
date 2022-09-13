import { ActionTypes } from "../Action-Types/action-type";

const initialState = {
  platforms: [],
  tokens:[],
  theme:[false],
  underwrite:[]
};

export const PlatformReducer = (state = initialState, action) => {
    // console.log(action)
  switch (action.type) {
    case ActionTypes.SET_PLATFORM:
      return { ...state, platforms: action.payload };

    default:
      return state;
  }
  
};

export const selectedPlatformReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PLATFORM:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const TokenReducer = (state = initialState, action) => {
    // console.log(action)
  switch (action.type) {
    case ActionTypes.SET_TOKEN:
      return { ...state, tokens: action.payload };

    default:
      return state;
  }
  
};

export const selectedTokenReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_TOKEN:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const ThemeDarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_DARK:
      return { ...state, theme:action.payload };

    default:
      return state;
  }
}
export const selectedThemeDarkReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELCTED_DARK:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const UnderwriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_UNDERWRITE:
      return { ...state, underwrite: action.payload };

    default:
      return state;
  }
}
export const selectedUnderwriteReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_UNDERWRITE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};