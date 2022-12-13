import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SingUp from "./components/Login/SingUp";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import ProfileUser from "./components/profile/ProfileUser";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrent } from "./JS/actions/userActions";
import NotFound from "./components/NotFound";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Footer from "./components/footer/Footer";
import AlertErrors from "./components/alertErrors/AlertErrors";
import AdminListUsers from "./components/admin/AdminListUsers";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrent());
  }, []);

  return (
    <div className="App">
      {" "}
      <AlertErrors></AlertErrors>
      <Navigation></Navigation>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SingUp></SingUp>}></Route>
        <Route
          path="/admin"
          element={<AdminListUsers></AdminListUsers>}
        ></Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfileUser />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
