import React, {FC} from 'react';
import logo from './logo.svg';
import './App.css';
import {Users} from "./Components/Users/users";

const App:FC = () => {
  return (
    <div className="App">
      <Users/>
    </div>
  );
}

export default App;
