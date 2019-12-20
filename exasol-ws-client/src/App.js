import React from 'react';
import './App.css';
import Login from './components/login'
import SqlQuery from './components/sqlQuery'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container>
      <Login />
      <SqlQuery />
    </Container>
  );
}

export default App;
