import "./App.css";
import { useEffect } from "react";
import * as Screen from "./screens";
import { AppDispatch } from "./redux/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { CHECK_USER_STATUS } from "./redux/feature/authSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {} = useSelector((state: any) => state.auth);

  useEffect(() => {
    dispatch(CHECK_USER_STATUS());
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Screen.Home />} />
          {/* POS SCREENS */}
          <Route path="/pos" element={<Screen.PosLogin />} />
          <Route path="/pos/table" element={<Screen.TableMap />} />
          <Route path="/pos/menu" element={<Screen.ProductMenu />} />
          {/* AUTHENTICATION SCREENS */}
          <Route path="/dashboard/login" element={<Screen.Auth.UserLogin />} />
          <Route path="/dashboard/register" element={<Screen.Auth.UserRegistration />} />
          {/* DASHBOARD SCREENS */}
          <Route path="/dashboard/overview" element={<Screen.Dashboard.Overview />} />
          <Route path="/dashboard/employee" element={<Screen.Dashboard.EmployeeList />} />
          <Route path="/dashboard/employee/create" element={<Screen.Dashboard.CreateNewEmployee />} />
          <Route path="/dashboard/store/create" element={<Screen.Dashboard.CreateNewStore />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
