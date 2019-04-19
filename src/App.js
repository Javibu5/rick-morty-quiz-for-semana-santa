import React, { Component } from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import "./App.css";
import Cuestion from "./containers/Cuestion";
import { store } from "./store";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Cuestion
            cuestion="¿Pregunta?"
            answers={["Respuesta1", "Respuesta2", "Respuesta3"]}
          />
        </Container>
      </Provider>
    );
  }
}

export default App;
