import React from "react";
import Logo from "../../images/logo.png";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import Algolia from "../../images/Algolia-logo.png"
import Login from "../../Login/index";

const About = () => {
  return (
    <div className="Header" >
      <img src={Logo} alt="hackerLogo" />
      <div className="headerTitle">
        <span>Search</span>
        <p> Hacker News</p>
      </div>
      <div className="search">
        <div className="searchicon">
          <SearchIcon />
        </div>
        <div className="searchInput">
          <input placeholder="Search stories by title, url or author" />
        </div>
        <p>Search by </p><a href="https://www.algolia.com/?utm_source=hn_search&amp;utm_medium=link&amp;utm_term=logo&amp;utm_campaign=hn_algolia"><img src={Algolia} alt="aligolia" /></a>
      </div>
      <div className="login">
            <Login />
      </div>

    </div>
  )
};

export default About;
