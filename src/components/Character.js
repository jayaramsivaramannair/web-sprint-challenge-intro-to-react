// Write your Character component here
//Chacters from Rick and Morty's Universe
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col} from 'reactstrap';

const Character = ({name, avatar, gender, species, status, location}) => {
    return (
        <CardContainer>
            <CardHeader>CHARACTER: {name.toUpperCase()}</CardHeader>
            <CardText><span>Gender :</span>{ gender}</CardText>
            <CardText><span>Species :</span>{ species}</CardText>
            <CardText><span>Status :</span>{ status}</CardText>
            <CardText><span>Location :</span>{ location}</CardText>
            <Container>
                <Row>
                    <Col>
                        <RoundedImage src={avatar} className="img-fluid"/>
                    </Col>
                </Row>
            </Container>
        </CardContainer>

    );
};

export default Character;

const RoundedImage = styled.img`
    border-radius: 50%;
`;

const CardContainer = styled.div`
    text-align: center;
    border: 2px solid green;
    border-radius: 25px;
    padding: 25px 25px;
    margin: 10px 5px;
    font-size: 0.75em;
    display: inline-block;
    font-family: 'Philosopher', sans-serif;
`;

const CardHeader = styled.h1`
    font-size: 1.2em;
`;

const CardText = styled.div`
    font-weight: bold;
`

