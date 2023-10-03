import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import CRMDashboard from "./Pages/CRM/Dashboard";
import L1Dashboard from "./Pages/L1/Dashboard/Subscriptions";
import CRMCompany from "./Pages/CRM/Company/Company";
import Users from "./Pages/L1/Users";
import Roles from "./Pages/L1/Roles";
import Permission from "./Pages/L1/Permission";
import Subscriptions from "./Pages/L1/Dashboard/Subscriptions";
import Payment from "./Pages/L1/Payment";
import Inbox from "./Pages/L1/Inbox";
import Opportunity from "./Pages/CRM/Opportunity/Opportunity";
import Account from "./Pages/CRM/Account/Account";
import ServiceDesk from "./Pages/CRM/ServiceDesk/index";
import Stock from "./Pages/CRM/Stock/Stock";

//OKR Routes
import OKRDashboard from "./Pages/OKR/Dashboard";
import OKRCompany from "./Pages/OKR/Company";
import OKRCheckins from "./Pages/OKR/Checkins";
import OKRProgress from "./Pages/OKR/Progress";
import OKRPerformance from "./Pages/OKR/Performance";
import OKRReport from "./Pages/OKR/Report";
import OKRSettings from "./Pages/OKR/Settings";

import Harvest from "./Pages/PPS/Harvest/Harvest";
import Fishcage from "./Pages/PPS/Fishcage/Fishcage";
import Fishstage from "./Pages/PPS/Fishstage/FIshstage";
import Incubation from "./Pages/PPS/Incubation/Incubation";
import Reports from "./Pages/PPS/Reports/Reports";
import Workers from "./Pages/PPS/Workers/Workers";
import Market from "./Pages/PPS/Market/Merket";
import Logistics from "./Pages/PPS/Logistics/Logistics";
import Clients from "./Pages/PPS/Clients/Clients";
import Login from "./Pages/L1/Login";

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<L1Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="roles" element={<Roles />} />
          <Route path="permissions" element={<Permission />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="payment" element={<Payment />} />
          {/* <Route path="settings" element={<Settings />} /> */}
          <Route path="inbox" element={<Inbox />} />
        </Route>
        <Route path="/auth">
          <Route path="login" element={<Login />}/>
        </Route>
        <Route path="/mgmt">
          {/* <Route index element={<Dashboard />} /> */}
          <Route path="fishcage" element={<Fishcage />} />
          <Route path="fishstage" element={<Fishstage />} />
          <Route path="incubation" element={<Incubation />} />
          <Route path="reports" element={<Reports />} />
          <Route path="harvest" element={<Harvest />} />
          <Route path="workers" element={<Workers />} />
          <Route path="market" element={<Market />} />
          <Route path="logistics" element={<Logistics />} />
          <Route path="clients" element={<Clients />} />
        </Route>

        <Route path="/client">
          <Route index element={<CRMDashboard />} />
          <Route path="company" element={<CRMCompany />} /> 
          <Route path="opportunity" element={<Opportunity />} />
          <Route path="account" element={<Account />} />
          <Route path="sd" element={<ServiceDesk />} />
          <Route path="stock">
            <Route index element={<Stock />} />
            {/* <Route path="vendor/:id" element={<VendorDetail />} /> */}
          </Route>
        </Route>
        <Route path="/logistics">
          <Route index element={<OKRDashboard />} />
          <Route path="company" element={<OKRCompany />} />
          <Route path="checkins" element={<OKRCheckins />} />
          <Route path="progress" element={<OKRProgress />} />
          <Route path="performance" element={<OKRPerformance />} />
          <Route path="reports" element={<OKRReport />} />
          <Route path="settings" element={<OKRSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
