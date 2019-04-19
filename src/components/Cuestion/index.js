import React from "react";
import styled, { css } from "styled-components";
import Character from "../../containers/Character";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Button = styled.button`
  width: 100px;
  height: 60px;
  background-color: cornflowerblue;
  color: white;
  font-weight: bold;
  font-size: 15px;
  ${props =>
    !props.isLastElement &&
    css`
      margin-right: 100px;
    `}
`;

const Title = styled.h1`
  margin-bottom: 100px;
`;

const Cuestion = ({ currentCuestion, answerCuestion }) => {
  if (currentCuestion) {
    const { cuestion, answers } = currentCuestion;
    return (
      <Container>
        <Title>{cuestion}</Title>
        <div>
          {answers.map((answer, index) => (
            <Button
              key={Math.random()}
              isLastElement={index === answers.length - 1}
              onClick={answerCuestion}
            >
              {answer}
            </Button>
          ))}
        </div>
      </Container>
    );
  }

  return (
    <Character
      name="Rick Sanchez"
      image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      status="Alive"
      gender="Male"
      origin={{
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1"
      }}
    />
  );
};

export default Cuestion;
