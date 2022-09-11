import { ActionTypes } from "../Action-Types/action-type";

const initialState = {
  platforms: [],
  tokens:[]
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
