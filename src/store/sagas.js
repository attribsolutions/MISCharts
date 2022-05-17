import { all, fork } from "redux-saga/effects"

//public
import AccountSaga from "./auth/register/saga"
import AuthSaga from "./auth/login/saga"
import ForgetSaga from "./auth/forgetpwd/saga"
import ProfileSaga from "./auth/profile/saga"
import LayoutSaga from "./layout/saga"
import FranchiseSale_ChartSaga from "./Chart/FranchiseSale_Chart/saga"
import Spinner_Saga from "./Utilites/Spinner/saga"
import Pos_Stock_Report_Reducer_Saga from "./PosStockReport/saga"


export default function* rootSaga() {
  yield all([
    //public
    fork(AccountSaga),
    fork(AuthSaga),
    fork(ForgetSaga),
    fork(ProfileSaga),
    fork(LayoutSaga),
    fork(Spinner_Saga),
    fork(FranchiseSale_ChartSaga),
    fork(Pos_Stock_Report_Reducer_Saga),
  ])
}
