import React from 'react';
import FlareComponent from 'flare-react';
import crab from "./crabHasADeadline.flr";
class flareController extends FlareComponent.Controller {
  initialize(artboard) {
    if (artboard.name === "Artboard") {
      this.Art = artboard;
    }
  }

  advance(artboard, elapsed) {
    return true;
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myFlareController: new flareController()
    };
  }

  render() {
    return (
      <div>
        <FlareComponent
          width={1024}
          height={768}
          animationName="Work"
          file={crab}
          controller={this.state.myFlareController}
        />
      </div>
    );
  }
}


export default App;