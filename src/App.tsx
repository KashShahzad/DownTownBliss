import React from "react";
import "./App.css";
import Navigate from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Car from "./components/Carousel";
import Foot from "./components/Footer"
import DetailPan from "./components/Detail";
import Services from "./components/Service";
import SMedia from "./components/SM";

const App: React.FC = () => {
  return <div className="App">
    <Navigate />
    <Car />
    <Services />
    <SMedia />
    <DetailPan />
    <Foot />
  </div>;
};

export default App;
