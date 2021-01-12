import React from "react";
import { Redirect } from "react-router-dom";

class Signin extends React.Component {
  render() {
    const { username, password, isLoggedIn } = this.props;
    if (isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Signin</h1>
        <input
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={this.props.handleChange}
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={this.props.handleChange}
        />
        <button onClick={this.props.handleLogin}>Signin</button>
      </div>
    );
  }
}

export default Signin;


