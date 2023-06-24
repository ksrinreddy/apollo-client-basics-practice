import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Character from "./pages/Character";
import CharactersList from "./pages/CharactersList";
import Search from "./pages/Search";
import { GlobalStyles } from "./pages/styles/Global.styled";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
