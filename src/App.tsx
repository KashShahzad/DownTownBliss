import React from "react";
import "./App.css";
import Navigate from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Car from "./components/Carousel";
import Foot from "./components/DetailedFooter"
import ServiceLay from './components/ServiceLayout'
import SMedia from "./components/SM";
import Culture from "./components/Culture";
import DelBook from "./components/D&B";
import FoodInvest from "./components/FoodInvest";
import FoodNutrition from "./components/FoodNutrition";


const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navigate />
      <Car />
      <ServiceLay />
      <FoodNutrition />
      <FoodInvest />
      <Culture />
      <SMedia />
      <DelBook />
      <Foot />
    </React.Fragment>);
};

export default App;
