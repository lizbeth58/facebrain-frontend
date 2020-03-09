//* Dependencies
import React, { Component } from "react";
import Clarifai from "clarifai";

//* CSS
import "./App.css";

//* Components
import Particles from "react-particles-js";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

const app = new Clarifai.App({
  apiKey: "1daf58efe29b46758f7a4618be4d2f3a"
});

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
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: ""
    };
  }

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onSubmit = () => {
    console.log("click");
    this.setState({ imageUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function(response) {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      },
      function(err) {}
    );
  };

  render() {
    return (
      <div className='App'>
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
