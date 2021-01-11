import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import PageFilter from './components/PageFilter.js';
import styled from 'styled-components';
import { Container, Row, Col} from 'reactstrap';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  //The below api call is made only on initial website load

  useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
      .then((response) => {
        console.log(response.data);
        setTotalPages(response.data.info.pages);
        setCharacters(response.data.results)})
      .catch((error) => console.log(error));
  }, [pageNumber])

  return (
    <AppContainer className="App">
      <Header className="Header">Rick and Morty's Universe</Header>
      <PageFilter pages = {totalPages} pageNumber = {pageNumber} onClick = {(e) => setPageNumber(e.target.textContent)}/>
      <Container>
        <Row>
          <Col>
            {characters.map((character) => {
            return (
            <Character key={`key${character.id}`} 
            name={character.name} 
            avatar={character.image} 
            gender={character.gender} 
            species={character.species} 
            status={character.status} 
            location={character.location.name}
            origin = {character.origin.name}/>     
            )})} 
          </Col>
        </Row>
      </Container>
    </AppContainer>
  );
};

const Header = styled.p`
  color: #24325FFF;
  text-align: center;
  font-size: 2.5rem;
  font-family: 'Dokdo', cursive;
  font-weight: bold;

`;

const AppContainer = styled.div`
  font-family: 'philosopher', cursive;
  color: #24325FFF
  margin: 0;
`;

export default App;
