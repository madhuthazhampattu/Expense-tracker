import React from "react";
import styled from "styled-components";
import HomeComponent from "./modules/home";
import Footer from "./footer";
import "./app.css"
import SideMenuComponent from "./components/SideMenuComponent";

const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 30px ;
  font-family: Montserrat;
`;

const Header = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
`;
const App = () => {
  return (
    <Container>
      <SideMenuComponent/>
      <Header>Expense Tracker</Header>
      <HomeComponent />
      <Footer />
    </Container>
  );
};

export default App;
