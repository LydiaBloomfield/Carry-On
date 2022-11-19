import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddReview from "./components/add-review";
import Restaurant from "./components/restaurants";
import RestaurantsList from "./components/restaurants-list";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Destinations from "./components/destinations";
import Register from "./components/register";

// using bootstrap components
// ex. navbar-dark is different bootstrap classes
//"navbar-brand" indicates that it's the brand part of the nav bar
// similarly, navbar-nav indicates the navigation part of the nav bar
// Clicking restaurants will take you to restaurants page

//*** is using useState non-restful? */
function App() {
  const [user, setUser] = React.useState(null);

  // kind of a dummy login system
  async function login(user = null){
    setUser(user);
  }

  async function logout(){
    setUser(null);
  }


  return (
    <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a href="/restaurants" className="navbar-brand">
          <h1> Carry On </h1>
      </a>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/restaurants"} className="nav-link">
            Restaurants
          </Link>
        </li>
        <li className="nav-item" >
          { user ? (
            <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
              Logout {user.name}
            </a>
          ) : (            
          <Link to={"/login"} className="nav-link">
            Login
          </Link>
          )}

        </li>

        <li className="nav-item">
          <Link to={"/dashboard"} className="nav-link">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/destinations"} className="nav-link">
            Destinations
          </Link>
        </li>
      </div>
    </nav>

    <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/restaurants"]} component={RestaurantsList} />
          <Route 
            path="/restaurants/:id/review"
            render={(props) => (
              <AddReview {...props} user={user} />
            )}
          />
          <Route 
            path="/restaurants/:id"
            render={(props) => (
              <Restaurant {...props} user={user} />
            )}
          />
          <Route 
            path="/login"
            render={(props) => (
              <Login {...props} login={login} />
            )}
          />
          <Route 
            path="/dashboard"
            render={(props) => (
              <Dashboard {...props} user={user} />
            )}
          />
           <Route 
            path="/destinations"
            render={(props) => (
              <Destinations {...props} user={user} />
            )}
          />
          <Route 
            path="/register"
            render={(props) => (
              <Register {...props} user={user} />
            )}
          />

        </Switch>
      </div>

  </div>
  );
}

export default App;
