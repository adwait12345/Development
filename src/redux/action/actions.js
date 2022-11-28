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

export const setcToken = (cToken) => {
  return {
    type: ActionTypes.SET_cTOKEN,
    payload: cToken,
  };
};

export const selectedcToken = (scToken) => {
  return {
    type: ActionTypes.SELECTED_cTOKEN,
    payload: scToken,
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

export const setProtocal = (Protocal) => {
  // console.log(Platform)
  return {
    type: ActionTypes.SET_PROTCAL,
    payload: Protocal,
  };
};

export const selectedProtocal = (sProtocal) => {
  return {
    type: ActionTypes.SELECTED_PROTOCAL,
    payload: sProtocal,
  };
};

export const setkey = (key) => {
  // console.log(Platform)
  return {
    type: ActionTypes.SET_KEY,
    payload: key,
  };
};

export const selectedkey = (skey) => {
  return {
    type: ActionTypes.SELECTED_KEY,
    payload: skey,
  };
};

export const setContract = (Contract) => {
  // console.log(Platform)
  return {
    type: ActionTypes.SET_CONTRACT,
    payload: Contract,
  };
};

export const selectedContract = (sContract) => {
  return {
    type: ActionTypes.SELECTED_CONTRACT,
    payload: sContract,
  };
};

export const setDropDown = (Dropdown) => {
  // console.log(Platform)
  return {
    type: ActionTypes.SET_DROPDOWN,
    payload: Dropdown,
  };
};

export const selectedDropDown = (sDropdown) => {
  return {
    type: ActionTypes.SELECTED_DROPDOWN,
    payload: sDropdown,
  };
};

export const setActivatedInsurance = (Activated) => {
  return {
    type: ActionTypes.SET_ACTIVATED_INSURANCE,
    payload: Activated,
  };
};

export const selectedActivatedInsurance = (sActivated) => {
  return {
    type: ActionTypes.SELECTED_ACTIVATED_INSURANCE,
    payload:sActivated
  };
};

export const setInsuranceType = (Type) => {
  return {
    type: ActionTypes.SET_INSURANCE_TYPE,
    payload: Type,
  };
};

export const selectedInsuranceType = (sType) => {
  return {
    type: ActionTypes.SELECTED_INSURANCE_TYPE,
    payload:sType
  };
};
export const setInsuranceCategory = (Category) => {
  return {
    type: ActionTypes.SET_INSURANCE_CATEGORY,
    payload: Category,
  };
};

export const selectedInsuranceCategory = (sCategory) => {
  return {
    type: ActionTypes.SELECTED_INSURANCE_CATEGORY,
    payload:sCategory
  };
};

export const setInsuranceMethod = (Method) => {
  return {
    type: ActionTypes.SET_INSURANCE_METHOD,
    payload: Method,
  };
};

export const selectedInsuranceMethod = (sMethod) => {
  return {
    type: ActionTypes.SELECTED_INSURANCE_METHOD,
    payload: sMethod
  };
};

export const setTransactionAddress = (Transaction) => {
  return {
    type: ActionTypes.SET_TRANSACTION_ADDRESS,
    payload: Transaction,
  };
};

export const selectedTransactionAddress = (sTransaction) => {
  return {
    type: ActionTypes.SELECTED_TRANSACTION_ADDRESS,
    payload: sTransaction
  };
};

export const setCurrentNetwork = (Network) => {
  return {
    type: ActionTypes.SET_CURRENT_NETWORK,
    payload: Network,
  };
};

export const selectedCurrentNetwork = (sNetwork) => {
  return {
    type: ActionTypes.SELECTED_CURRENT_NETWORK,
    payload: sNetwork
  };
};