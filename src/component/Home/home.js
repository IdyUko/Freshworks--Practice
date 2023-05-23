import React from "react";
import styled from "styled-components"
import Card from "./card"

const Home = () => {
  return(
       <Container>
              <Wrapper>
                    <Left><img src="/freshworks1.png"/></Left>
                    <Right>
                        <H2>FRESHWORKS PRODUCTS</H2> 
                        <H1>All SaaS, no bloat.</H1>
                        <Div>
                            <Card title= "Freshservice" description= "Modernise IT service and operations with an intuitive, completely integrated IT."/>
                            <Card title= "Freshchat" description= "Have more meaningful conversations, across every channel, with every customer. "/>
                        </Div>

                        <Div>
                            <Card title= "Freshdesk" description= "Scale faster with a unified, intelligent customer support platform."/>
                            <Card title= "Freshsales" description= "Sell smarter and faster while leaving time-consuming tasks to automation. "/>
                        </Div>

                        <Div>
                            <Card title= "Freshmarketer" description= "Attract, engage, and nuture your customers through the engagement channels they love."/>
                            <Card title= "All products and trails"/>
                        </Div>

                    </Right>
              </Wrapper>
        </Container>
  )
};

export default Home;

const Container = styled.div`
color: black;
background-color: lightblue;
width: 100%;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
`;
const Wrapper = styled.div`
color: black;
// background-color: lightblue;
width: 80%;
height: 90vh;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Left= styled.div`
color: black;
// background-color: pink;
width: 40%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

img{
    width: 80%;
    height: 80%;
}
`;
const Right = styled.div`
color: black;
// background-color: orange;
width:55%;
height: 100%;
`;
const H2 = styled.div`
color: black;
font-size: 15px;
margin-top: 10px;
`;
const H1 = styled.div`
color: black;
font-size: 50px;
font-weight: bold;
margin-top: 20px;
`;
const Div = styled.div`
width: 100%;
height: 180px;
// background-color: green;
display: flex;
justify-content: space-between;
align-items: center;
`;