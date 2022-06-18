import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux'

import { addUsername, addPassword, addErrorUsername, addErrorPassword } from "../reducers";

const Login = (props) => {
  const { user, password, errorUname, errorPwd } = props
  const { addUser, addPass, addEPwd, addEUname } = props
  const navigate = useNavigate();

  const handleUserChange = (e) => {
    const { value } = e.target;
    addUser({ userName: value })
    if (value.length < 5)
      addEUname({ errorUname: "UserName must not be less than 5 char" });
    else addEUname({ errorUname: "" });
  }

  const handlePassChange = (e) => {
    const { value } = e.target;
    addPass({ password: value })
    if (value.length < 5)
      addEPwd({ errorPwd: "Password must be atleast 6 character" });
    else addEPwd({ errorPwd: "" });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      errorUname === "" &&
      errorPwd === "" &&
      user !== "" &&
      password !== ""
    ) {
      navigate("/logout");
    } else {
      if (!errorUname && !user) addEUname("Enter User Name");
      if (!errorPwd) addEPwd("Enter Password");
    }
  };

  return (
    <div className="container" style={{ height: "100vh" }}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6">
          <form>
            <div className="form-group ">
              <label htmlFor="userName">User Name: </label>
              <input
                className={
                  errorUname ? "form-control border-danger" : "form-control"
                }
                id="userName"
                type="text"
                value={user}
                onChange={handleUserChange}
              />
              <small className="text-danger">{errorUname}</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input
                className={
                  errorPwd ? "form-control border-danger" : "form-control"
                }
                id="password"
                type="password"
                value={password}
                onChange={handlePassChange}
              />
              <small className="text-danger">{errorPwd}</small>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary btn-block"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userName,
    password: state.password,
    errorUname: state.errorUname,
    errorPwd: state.errorPwd
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: obj => dispatch(addUsername(obj)),
    addPass: obj => dispatch(addPassword(obj)),
    addEUname: obj => dispatch(addErrorUsername(obj)),
    addEPwd: obj => dispatch(addErrorPassword(obj))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
