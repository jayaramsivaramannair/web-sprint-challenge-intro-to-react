// Write your Character component here
//Chacters from Rick and Morty's Universe
import React from 'react';
import {CardImg, CardText} from 'reactstrap';
import styled from 'styled-components';

const Character = ({name, avatar, gender, species, status, location}) => {
    return (
        <CardContainer>
            <RoundedImage src={avatar}/>
            <CardText>Name: {name}</CardText>
            <CardText>Gender: {gender}</CardText>
            <CardText>Species {species}</CardText>
            <CardText>Status: {status}</CardText>
            <CardText>Location: {location}</CardText>
        </CardContainer>

    );
};

export default Character;

const RoundedImage = styled.img`
    width: 100px;
    height: auto;
    border-radius: 50px;
`;

const CardContainer = styled.div`
    border: 2px solid green;
`

