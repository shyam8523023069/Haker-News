import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (

    <div style={{background:' #ff7316'}}>
       <h1> {props.name}</h1>
      <Link href="./index.js" style={{ textDecoration: 'none',color:'black' }}>
        <p>Login</p>
      </Link>
    </div>

  )
}

export default Home;
