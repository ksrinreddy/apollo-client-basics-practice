import React from "react";
import { XCenter90 } from "./styles/SectionCenter.styled";
import { List, StyledCharactersList } from "./styles/CharactersList.styled";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

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
              <Link key={id} to={`/${id}`}>
                <img src={image} alt={name} />
                <h4>{name}</h4>
              </Link>
            );
          })}
        </List>
      </StyledCharactersList>
    </XCenter90>
  );
};

export default CharactersList;
