import React from "react";
import Header from "./components/Header/HeaderSearch";
import StoriesContainer from './containers/StoriesContainer';
import Filter from './components/Filter' ; 


import './App.css';

function App() {
  return (
    <div className="App" >
      <Header />
      <Filter />
      <StoriesContainer />
    </div>
    
  );
    
    
}

export default App;
