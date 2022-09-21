import { ActionTypes } from "../Action-Types/action-type";

const initialState = {
  platforms: ["Select"],
  tokens:[],
  ctokens:[],
  theme:[false],
  underwrite:["Click to Select"],
  protocols:[],
  keys:[]
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

export const cTokenReducer = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case ActionTypes.SET_cTOKEN:
      return { ...state, ctokens: action.payload };

    default:
      return state;
  }

};

export const selectedcTokenReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_cTOKEN:
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

export const ProtocalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PROTCAL:
      return { ...state, protocols: action.payload };

    default:
      return state;
  }
}
export const selectedProtocalReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PROTOCAL:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const KeyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_KEY:
      return { ...state, keys: action.payload };

    default:
      return state;
  }
}
export const selectedKeyReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_KEY:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};