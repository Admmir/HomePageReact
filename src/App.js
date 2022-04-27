import React, { Fragment } from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <MainContainer/>
      <Footer/>
    </Fragment>
  );
};

export default App;
