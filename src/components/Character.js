// Write your Character component here
//Chacters from Rick and Morty's Universe
import React from 'react';
import styled from 'styled-components';
import Expand from './Expand.js';

const Character = ({name, avatar, gender, species, status, location, origin}) => {
    return (
        <CardContainer>
            <CardHeader>{name.toUpperCase()}</CardHeader>
            <Expand avatar = {avatar} 
            gender = {gender} 
            species = {species} 
            status = {status} 
            location = {location}
            origin = {origin}/>
        </CardContainer>

    );
};

export default Character;



const CardContainer = styled.div`
    text-align: center;
    border: 2px solid green;
    border-radius: 25px;
    padding: 25px 25px;
    margin: 10px 5px;
    font-size: 0.5em;
    font-family: 'Philosopher', sans-serif;
`;

const CardHeader = styled.h1`
    font-size: 1.5em;
`;

