import React, {useState} from 'react';
import styled from 'styled-components';
import { Collapse, Container, Row, Col} from 'reactstrap';

const Expand = ({avatar, gender, species, status, location, origin}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <StyledButton onClick={toggle}>{isOpen ? "Contract" : "Expand"}</StyledButton>
            <Collapse isOpen={isOpen}>
                <p><span>Gender :</span>{ gender}</p>
                <hr/>
                <p><span>Species :</span>{ species}</p>
                <hr/>
                <p><span>Status :</span>{ status}</p>
                <hr/>
                <p><span>Location :</span>{ location}</p>
                <hr/>
                <p><span>Origin :</span>{origin}</p>
                <hr/>
                <Container>
                    <Row>
                        <Col>
                            <RoundedImage src={avatar} className="img-fluid"/>
                        </Col>
                    </Row>
                </Container>
            </Collapse>
        </div>
    )
}

export default Expand;

const RoundedImage = styled.img`
    border-radius: 50%;
`;

const StyledButton = styled.button`
    color: #7FBB43;
    background-color: white;
    border: 2px solid #7FBB43;
`