import { combineReducers } from "redux";
import {
  PlatformReducer,
  selectedPlatformReducer,
  TokenReducer,
  selectedTokenReducer,
  ThemeDarkReducer,
  selectedThemeDarkReducer,
  selectedUnderwriteReducer,
  UnderwriteReducer,
  ProtocalReducer,
  selectedProtocalReducer,
  cTokenReducer,
  selectedcTokenReducer,
  selectedKeyReducer,
  KeyReducer,
  ContractReducer,
  selectedContractReducer,
  DropdownReducer,
  selectedDropdownReducer,
  selectedInsuranceReducer,
  InsuranceReducer,
  InsuranceTypeReducer,
  selectedInsuranceTypeReducer,
  InsuranceCategoryReducer,
  selectedInsuranceCategoryReducer,
  InsuranceMethodReducer,
  selectedInsuranceMethodReducer,
  selectedTransactionAddressReducer,
  TransactionAddressReducer,
  selectedCurrentNetworkReducer,
  CurrentNetworkReducer
} from "./Reducer";

const reducer = combineReducers({
  allPlatforms: PlatformReducer,
  platform: selectedPlatformReducer,
  allTokens: TokenReducer,
  token: selectedTokenReducer,
  alltheme: ThemeDarkReducer,
  theme: selectedThemeDarkReducer,
  allUnderwrite: UnderwriteReducer,
  underwrite: selectedUnderwriteReducer,
  allProtocol: ProtocalReducer,
  Protocal: selectedProtocalReducer,
  allcTokens: cTokenReducer,
  ctoken: selectedcTokenReducer,
  allKey: KeyReducer,
  key: selectedKeyReducer,
  allContracts: ContractReducer,
  contract: selectedContractReducer,
  allDropdown: DropdownReducer,
  dropdown: selectedDropdownReducer,
  allInsurance: InsuranceReducer,
  Insurance: selectedInsuranceReducer,
  InsuranceType:selectedInsuranceTypeReducer,
  allInsuranceType:InsuranceTypeReducer,
  InsuranceCategory:selectedInsuranceCategoryReducer,
  allInsuranceCategory:InsuranceCategoryReducer,
  InsuranceMethod:selectedInsuranceMethodReducer,
  allInsuranceMethod:InsuranceMethodReducer,
  TransactionAddress:selectedTransactionAddressReducer,
  allTransactionAddress:TransactionAddressReducer,
  CurrentNetwork:selectedCurrentNetworkReducer,
  allCurrentNetwork:CurrentNetworkReducer,
});
export default reducer;
