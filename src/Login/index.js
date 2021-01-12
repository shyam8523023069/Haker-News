
import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import Signin from "./LoginForm";
import Home from "./Home";


class Login extends React.Component {
  state = {
    username: "",
    password: "",
    isLoggedIn: false
  };
  handleLogin = () => {
    const { username, password } = this.state;
    if (username && password) {
      this.setState({
        isLoggedIn: true
      });
      console.log("Login success", username, password);
    } else {
      console.error("Login failed");
    }
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  render() {
    const { username, password, isLoggedIn } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
        <Route
            exact
            path="/"
               render={(props) => {
              return <Home name={username} {...props} />;
            }}
          />
          <Route
            path="/signin"
            render={(props) => {
              return (
                <Signin
                  {...props}
                  handleChange={this.handleChange}
                  handleLogin={this.handleLogin}
                  username={username}
                  password={password}
                  isLoggedIn={isLoggedIn}
                />
              );
            }}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default Login;
