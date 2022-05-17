import React from "react"
import { Redirect } from "react-router-dom"

//Dashboard
import Dashboard from "../pages/Dashboard/index";

// Authentication related pages
import userProfile from "../pages/Authentication/user-profile"
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import FranchiseSaleWithoutOther from "../pages/ChartJs/FranchiseSaleWithoutOther/FranchiseSaleWithoutOther";
import FranchiseSaleWithOther from "../pages/ChartJs/FranchiseSaleWithOther/FranchiseSaleWithOther";

import PivotTableComponent from "../pages/Pivot/PivotTableComponent";
import PosSale from "../pages/PosSale/PosSaleTable/PosSale";
import PosStockReport from "../pages/PosStockReport/PosStockReport";
import PosSaleVerticalChart from "../pages/PosSale/PosSaleVerticalChart/PosSaleVerticalChart";
import FranchiseSalePiaChart from "../pages/PosSale/FranchiseSalePiaChart/FranchiseSalePiaChart";
import NewItemList from "../pages/newItemList/NewItemList";
// import Demo from "../pages/Demo/Demo";

const userRoutes = [

  //dashboard
  { path: "/dashboard", component: Dashboard },

  //profile
  { path: "/profile", component: userProfile },
  { path: "/FranchiseSaleWithOutOther", component: FranchiseSaleWithoutOther },
  { path: "/FranchiseSaleWithOther", component: FranchiseSaleWithOther },
  { path: "/pivot", component: PivotTableComponent },
  { path: "/posSale", component: PosSale },
  { path: "/posStockReport", component: PosStockReport },
  { path: "/FranchiseSalePiaChart", component: FranchiseSalePiaChart },
  { path: "/New", component: NewItemList },




  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  //authencation page
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
]

export { userRoutes, authRoutes }
