import React, { useState } from "react";

const Login = props => {

  const initialUserState = {
    name: "",
    id: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    props.login(user)
    props.history.push('/');
  }

  return (
    <div className="row" class="col d-flex justify-content-center"> 
    <div className="col-lg-6 pb-1">
      <div class="card">
        <div class="card-body">
          <div className="submit-form">
            <div>
              <div className="form-group">
                <label htmlFor="user">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={user.name}
                  onChange={handleInputChange}
                  name="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="id">Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  required
                  value={user.id}
                  onChange={handleInputChange}
                  name="id"
                />
              </div>

              <br></br>

              <button onClick={login} className="btn btn-success">
                Login
              </button>
              <br></br>
              Don't have an account?
              <br></br>
              <a href="../register"> Register </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;