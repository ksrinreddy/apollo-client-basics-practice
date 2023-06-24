import { gql, useLazyQuery } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { StyledSearch } from "./styles/Search.styled";
import { XCenter90 } from "./styles/SectionCenter.styled";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");
  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  console.log({
    loading,
    error,
    data,
    called,
  });
  return (
    <StyledSearch>
      <XCenter90>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => getLocations()}>Search</button>
        {loading && <div>Loading...</div>}
        {error && <div>something went wrong</div>}
        {data && (
          <ul>
            {data.characters.results.map((character) => {
              return <li key={character.id}>{character.location.name}</li>;
            })}
          </ul>
        )}
      </XCenter90>
    </StyledSearch>
  );
};

export default Search;
