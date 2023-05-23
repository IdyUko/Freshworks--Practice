import React from "react";
import styled from "styled-components"
import { BsGlobe, BsPerson } from "react-icons/bs"


const Header = () => {
  return(
    <Div>
        <Wrapper>
            <Left>
                        <img src= "/freshwork-logo.png"/>
                        <Nav>Products</Nav>
                        <Nav>Platform</Nav>
                        <Nav>Resources</Nav>

            </Left>
            <Right>
                        <Nav>Demo</Nav>
                        <Nav>Pricing</Nav>
                        <BsGlobe  style={{ width: 20, height: 20}}/>
                        <BsPerson  style={{ width: 25, height: 25}}/>
                        <Button>Free Trial</Button>
            </Right>
        </Wrapper>
    </Div>
  )
};

export default Header;

const Div = styled.div`
color: black;
background-color: white;
width: 100%;
height: 70px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
`;
const Wrapper = styled.div`
// background-color: aqua;
width: 80%;
height: 80%;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Left = styled.div`
// background-color: yellow;
width: 40%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;

img{
    width: 120px;
    height: 30px;
    // background-color: blue;
}
`;
const Right = styled.div`
// background-color: green;
width: 30%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
`;
const Nav = styled.div`
:hover{
color: purple;
cursor: pointer;
transition: all 1s;
}
`;
const Button = styled.button`
background-color: purple;
color: white;
padding: 0.5rem 1.2rem;
border-radius: 5px;
border: 1px solid purple;
font-size: 20px;
font-weight: bold;
cursor: pointer;
transition: all 1s;
`;

