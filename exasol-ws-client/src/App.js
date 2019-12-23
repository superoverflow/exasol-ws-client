import React, { useState } from 'react';
import './App.css';
import Login from './components/login'
import SqlQuery from './components/sqlQuery'
import Container from 'react-bootstrap/Container'


function App() {
  const [connected, setConnected] = useState(false)
  return (
      <Container fluid={true} className="p-3">
        <Login connectCallback={() => setConnected(true)} />
        <hr />
        <SqlQuery connected={connected}/>
      </Container>
  );
}

export default App;
