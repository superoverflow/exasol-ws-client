import React from 'react';
import './App.css';
import Login from './components/login'
import SqlQuery from './components/sqlQuery'

function App() {
  return (
    <div className="App">
        <Login />
        <br/>
        <SqlQuery />
    </div>
  );
}

export default App;
