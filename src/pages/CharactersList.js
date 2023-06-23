import React from "react";
import { XCenter90 } from "./styles/SectionCenter.styled";
import { List, StyledCharactersList } from "./styles/CharactersList.styled";
import { useCharacters } from "../hooks/useCharacters";

const CharactersList = () => {
  const { error, loading, data } = useCharacters();
  if (loading) {
    return (
      <XCenter90>
        <StyledCharactersList>
          <div>Loading...</div>
        </StyledCharactersList>
      </XCenter90>
    );
  }
  if (error) {
    return (
      <XCenter90>
        <StyledCharactersList>
          <div>{error.message}</div>
        </StyledCharactersList>
      </XCenter90>
    );
  }
  return (
    <XCenter90>
      <StyledCharactersList>
        <h1>Characters List</h1>
        <List>
          {data.characters.results.map((character) => {
            const { id, name, image } = character;
            return (
              <div key={id}>
                <img src={image} alt="name" />
                <h4>{name}</h4>
              </div>
            );
          })}
        </List>
      </StyledCharactersList>
    </XCenter90>
  );
};

export default CharactersList;
