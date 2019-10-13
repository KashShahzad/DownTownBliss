import React from "react";
import "./App.css";
import Navigate from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Car from "./components/Carousel";
import Foot from "./components/Footer"
import DetailPan from "./components/Detail";
import ServiceLay from './components/ServiceLayout'
import SMedia from "./components/SM";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navigate />
      <Car />
      <ServiceLay />
      <SMedia />
      <DetailPan />
      <Foot />
    </React.Fragment>);
};

export default App;
