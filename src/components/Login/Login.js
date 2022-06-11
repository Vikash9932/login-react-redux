import React from "react";
import { useNavigate } from "react-router-dom";

import "./login.css";

const Login = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorUname, setErrorUname] = React.useState("");
  const [errorPwd, setErrorPwd] = React.useState("");

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "userName":
        setUserName(value);
        if (value.length < 5)
          setErrorUname("UserName must not be less than 5 char");
        else setErrorUname("");
        break;
      case "password":
        setPassword(value);
        if (value.length < 6)
          setErrorPwd("Password must be atleast 6 character");
        else setErrorPwd("");
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      errorUname === "" &&
      errorPwd === "" &&
      userName !== "" &&
      password !== ""
    ) {
      navigate("/logout");
    } else {
      if (!errorUname && !userName) setErrorUname("Enter User Name");
      if (!errorPwd) setErrorPwd("Enter Password");
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
                value={userName}
                onChange={handleChange}
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
                onChange={handleChange}
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

export default Login;
