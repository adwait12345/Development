import { ActionTypes } from "../Action-Types/action-type";



const initialState = {
  platforms: ["Select"],
  tokens:[],
  ctokens:[],
  theme:[false],
  dropdown:[false],
  underwrite:["Click to Select"],
  protocols:[],
  keys:[],
  insurance:[],
  InsuranceTypes:[],
  InsuranceCategory:[],
  InsuranceMethod:[],
  TransactionAddress:[],
  contracts: 
    {
    // ConstantFlowAgreement: process.env.REACT_APP_GOERLI_ConstantFlowAgreement,
    // SZT_Token: process.env.REACT_APP_GOERLI_SZT_Token,
    // BuySell: process.env.REACT_APP_GOERLI_BuySell,
    // GSZTToken: process.env.REACT_APP_GOERLI_GSZTToken,
    // DAI: process.env.REACT_APP_GOERLI_DAI,
    // _DAI: process.env.REACT_APP_GOERLI__DAI,
    // cDAI: process.env.REACT_APP_GOERLI_cDAI,
    // BAT_Token: process.env.REACT_APP_GOERLI_BAT_Token,
    // CBAT_Token: process.env.REACT_APP_GOERLI_CBAT_Token,
    // USDC: process.env.REACT_APP_GOERLI_USDC,
    // cUSDC: process.env.REACT_APP_GOERLI_cUSDC,
    // SAI: process.env.REACT_APP_GOERLI_SAI,
    // cSAI: process.env.REACT_APP_GOERLI_cSAI,
    // WBTC: process.env.REACT_APP_GOERLI_WBTC,
    // cWBTC: process.env.REACT_APP_GOERLI_cWBTC,
    // CompoundPool: process.env.REACT_APP_GOERLI_CompoundPool,
    // ProtocolRegistry: process.env.REACT_APP_GOERLI_ProtocolRegistry,
    // AAVE_Contract: process.env.REACT_APP_GOERLI_AAVE_Contract,
    // AAVE_Token: process.env.REACT_APP_GOERLI_AAVE_Token,
    // aAAVE_Token: process.env.REACT_APP_GOERLI_aAAVE_Token,
    // Aave_DAI: process.env.REACT_APP_GOERLI_Aave_DAI,
    // Aave_cDAI: process.env.REACT_APP_GOERLI_Aave_cDAI,
    // Aave_USDC: process.env.REACT_APP_GOERLI_Aave_USDC,
    // Aave_cUSDC: process.env.REACT_APP_GOERLI_Aave_cUSDC,
    // Aave_ChainLink: process.env.REACT_APP_GOERLI_Aave_ChainLink,
    // Aave_cChainLink: process.env.REACT_APP_GOERLI_Aave_cChainLink,
    // Aave_WBTC: process.env.REACT_APP_GOERLI_Aave_WBTC,
    // Aave_cWBTC: process.env.REACT_APP_GOERLI_Aave_cWBTC,
    // SZTStakingContract: process.env.REACT_APP_GOERLI_SZTStakingContract,
    // CoveragePool: process.env.REACT_APP_GOERLI_CoveragePool,
    // SwapDAI: process.env.REACT_APP_GOERLI_SwapDAI,
    // SwapsztDAI: process.env.REACT_APP_GOERLI_SwapsztDAI,

    }
  ,
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

export const ContractReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CONTRACT:
      return { ...state, contracts: action.payload };

    default:
      return state;
  }
}
export const selectedContractReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_CONTRACT:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const DropdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_DROPDOWN:
      return { ...state, dropdown: action.payload };

    default:
      return state;
  }
}
export const selectedDropdownReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_DROPDOWN:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const InsuranceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_ACTIVATED_INSURANCE:
      return { ...state, insurance: action.payload };

    default:
      return state;
  }
}
export const selectedInsuranceReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_ACTIVATED_INSURANCE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const InsuranceTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_INSURANCE_TYPE:
      return { ...state, InsuranceTypes: action.payload };

    default:
      return state;
  }
}
export const selectedInsuranceTypeReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_INSURANCE_TYPE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const InsuranceCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_INSURANCE_CATEGORY:
      return { ...state, InsuranceCategory: action.payload };

    default:
      return state;
  }
}
export const selectedInsuranceCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_INSURANCE_CATEGORY:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const InsuranceMethodReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_INSURANCE_METHOD:
      return { ...state, InsuranceMethod: action.payload };

    default:
      return state;
  }
}
export const selectedInsuranceMethodReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_INSURANCE_METHOD:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const TransactionAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_TRANSACTION_ADDRESS:
      return { ...state, TransactionAddress: action.payload };

    default:
      return state;
  }
}
export const selectedTransactionAddressReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_TRANSACTION_ADDRESS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};