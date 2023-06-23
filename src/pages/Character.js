import React from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";
import { StyledCharacter } from "./styles/Character.styled";
import { XCenter90 } from "./styles/SectionCenter.styled";

const Character = () => {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);

  if (error) {
    // return <p>{error.message}</p>;
    return <p>something went wrong</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <XCenter90>
      <StyledCharacter>
        <img src={data.character.image} alt={data.character.name} />
        <div>
          <h2>{data.character.name}</h2>
          <p>{data.character.gender}</p>
          {data.character.episode.map((item) => {
            return (
              <div key={item.id}>
                {item.name} - <b>{item.episode}</b>{" "}
              </div>
            );
          })}
        </div>
      </StyledCharacter>
    </XCenter90>
  );
};

export default Character;
