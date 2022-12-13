import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../../JS/actions/userActions";
// import  SignUp  from "./SingUp";
// import "./login.css";
const Login = () => {
  // hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(LoginUser(user, navigate));
  };
  return (
    <div id="main-wrapper" className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="card border-0">
            <div className="card-body p-0">
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="mb-5">
                      <h3 className="h4 font-weight-bold text-theme text-align-center">
                        Login
                      </h3>
                    </div>
                    <h6 className="h5 mb-0">Welcome back!</h6>
                    <p className="text-muted mt-2 mb-5">
                      Enter your email address and password to access admin
                      panel.
                    </p>
                    <form onSubmit={handleOnSubmit}>
                      <div className="input-field">
                        <i className="fas fa-envelope"></i>
                        <input
                          type="email"
                          id="exampleInputEmail1"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="input-field">
                        <i className="fas fa-lock"></i>

                        <input
                          type="password"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <button type="submit" className="btn btn-theme">
                        Login
                      </button>
                      <p className="social-text">
                        Or sign in with social platform
                      </p>
                      <div className="social-container">
                        <a href="#" className="social">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social">
                          <i className="fab fa-google-plus-g"></i>
                        </a>
                        <a href="#" className="social">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-none d-lg-inline-block">
                  <div className="account-block rounded-right">
                    <div className="overlay rounded-right" />
                    <div className="account-testimonial">
                      <h4 className="text-white mb-4">
                        This beautiful theme yours!
                      </h4>
                      <p className="lead text-white">
                        "Best investment i made for a long time. Can only
                        recommend it for other users."
                      </p>
                      <p>- Admin User</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end card-body */}
          </div>
          {/* end card */}
          <p className="text-muted text-center mt-3 mb-0">
            Don't have an account?
            <Link to="/signup">
              <a className="text-primary ml-1">register</a>
            </Link>
          </p>
          {/* end row */}
        </div>
        {/* end col */}
      </div>
      {/* Row */}
    </div>
  );
};

export default Login;
