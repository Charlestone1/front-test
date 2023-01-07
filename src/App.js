import logo from "./logo.svg";
import "./App.css";
import Login from "./components/form/Login";
import SignUp from "./components/form/SignUp";
import ForgotPassword from "./components/form/ForgotPassword";
import UserDashboard from "./components/UserDashboard";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/recover_password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
{
  /* <div className="App">
      <Login />
      <SignUp />
      <ForgotPassword />
      <UserDashboard />
    </div> */
}
export default App;
