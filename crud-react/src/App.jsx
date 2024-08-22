import React from "react";
import Container from "react-bootstrap/Container";
import "./App.css";
import Create from "./Components/Create";
function App() {
  return (
    <Container>
      <h1>CRUD using React</h1>
      <Create />
    </Container>
  );
}

export default App;
