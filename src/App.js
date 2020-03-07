//* Dependencies
import React, Component from "react";

//* CSS
import "./App.css";

//* Components
import Particles from "react-particles-js";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component { 
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onSubmit = (event) => {

  }

  render(){
  return (
    <div className='App'>
      <Particles className='particles' params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm  onInputChange={this.onInputChange} onSubmit={onSubmit}/>

      {/*
      <FaceRecognition />
      */}
    </div>
  );
    }
}

export default App;
