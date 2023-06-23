import React from "react";
import CharactersList from "./pages/CharactersList";
import { GlobalStyles } from "./pages/styles/Global.styled";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <CharactersList />
    </div>
  );
};

export default App;
