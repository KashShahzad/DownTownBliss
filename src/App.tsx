import React from "react";
import "./App.css";
import Navigate from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Car from "./components/Carousel";
import Foot from "./components/DetailedFooter"
// import ServiceLay from './components/ServiceLayout'
import SMedia from "./components/SM";
import Culture from "./components/Culture";
import FoodNutrition from "./components/FoodNutrition";
import styled from "styled-components";

const Styles = styled.div`
.div1{
  background-color: silver;
  width:100%;
  height: 300px;
}
`;

const App: React.FC = () => {
  return (
    <Styles>
      <React.Fragment>
        <Navigate />
        <Car />
        {/* <div className="div1"></div> */}
        <FoodNutrition />
        <Culture />
        <SMedia />
        <Foot />
      </React.Fragment>
    </Styles>);

};

export default App;
