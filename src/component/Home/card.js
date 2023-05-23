import React from "react";
import styled from "styled-components";
import {AiOutlineArrowRight} from "react-icons/ai";


const Card = ({title, description}) => {
  return(
       <Container>
            	<Wrapper>
               		<Div>
				<Title>{title} </Title>
				<AiOutlineArrowRight/>
                	</Div>
                	<Descrip>{description}</Descrip>
              	</Wrapper>
        </Container>
  )
};

export default Card;


const Container = styled.div`
color: black;
background-color: whitesmoke;
width: 48%;
height: 140px;
border-radius: 0.6rem;
display: flex;
justify-content: center;
align-items: center;
`;
const Wrapper = styled.div`
color: black;
// background-color: red;
border-radius: 10px;
width: 90%;
height: 90%;
`;
const Div = styled.div`
width: 100%;
margin-bottom: 20px;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Title = styled.div` 
font-weight: bold;
font-size: 18px;
`;
const Descrip = styled.div`
font-size: 16px;
color: grey
`;