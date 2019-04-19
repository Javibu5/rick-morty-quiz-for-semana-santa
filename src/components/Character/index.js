import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Character extends Component {
  componentDidMount() {
    this.props.fetchCharacter();
  }

  render() {
    const { character } = this.props;
    if (character) {
      const { name, status, species, gender, origin, image } = character;
      return (
        <Container>
          <h1>Eres este personaje</h1>
          <img src={image} />
          <h1>{name}</h1>
          {status && (
            <p>
              <b>Estado:</b> {status}
            </p>
          )}
          {gender && (
            <p>
              <b>Género:</b> {gender}
            </p>
          )}
          {origin && (
            <p>
              <b>Origen:</b> {origin.name}
            </p>
          )}
        </Container>
      );
    }

    return <div>Espera</div>;
  }
}

export default Character;
