import "./Login.css";
import { useState } from "react";
import { userData } from "../../utils/mockData";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  const handleSubmit=()=>{
    if(!email || !password){
      alert("Please fill all the fields");
    }else{
      //console.log(userData);
      let checkUser=userData.filter((ele)=>{
        return ele.email===email && ele.password===password;
      });
      console.log(checkUser);
      navigate('/dashboard');
    }
  }
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>
              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2023. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
