//* Dependencies
import React from "react";

//* CSS
import "./App.css";

//* Components
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/Logo/Logo";

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Logo />
      {/*
      <ImageLinkForm />
      <FaceRecognition />
      */}
    </div>
  );
}

export default App;
