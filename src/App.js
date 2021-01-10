import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character'
import styled from 'styled-components';

const App = () => {
  const [characters, setCharacters] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  //The below api call is made only on initial website load

  useEffect(() => {
      axios.get("https://rickandmortyapi.com/api/character/11,12,13,14,15,16,17,18,19,20")
      .then((response) => {console.log(response.data); setCharacters(response.data)})
      .catch((error) => console.log(error));
  }, [])


  return (
    <AppContainer className="App">
      <Header className="Header">Rick and Morty's Universe</Header>
      {characters.map((character) => {
        return (
        <Character key={`key${character.id}`} name={character.name} avatar={character.image} gender={character.gender} species={character.species} status={character.status} location={character.location.name}/>     
      )})} 
    </AppContainer>
  );
};

const Header = styled.h1`
  color: #C0E218;
`;

const AppContainer = styled.div`
  font-family: 'Dokdo', cursive;
`;

export default App;
