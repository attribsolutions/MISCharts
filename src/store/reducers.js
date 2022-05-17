import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import Login from "./auth/login/reducer"
import Account from "./auth/register/reducer"
import ForgetPassword from "./auth/forgetpwd/reducer"
import Profile from "./auth/profile/reducer"
import FranchiseSale_ChartReducer from "./Chart/FranchiseSale_Chart/reducer"
import SpinnerReducer from "./Utilites/Spinner/reducer"
import Pos_Stock_Report_Reducer from "./PosStockReport/reducer"
import Pos_NewItemList_Reducer from "./NewItemList/reducer"

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  Profile,
  SpinnerReducer,
  FranchiseSale_ChartReducer,
  Pos_Stock_Report_Reducer,
  Pos_NewItemList_Reducer

})

export default rootReducer
