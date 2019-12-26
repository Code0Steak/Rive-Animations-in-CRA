# Importing Rive Animations in React

## [Rive](https://rive.app/) is a graphics designing tool that allows you to design, animate raster/vector graphics and to integrate them in your [platform](https://rive.app/runtimes).
### It's runtimes help render graphics at 60fps. Also they provide animation-mixing which help us add a personality to our animated entity. 

*To get going with this repository, follow the guidelines below:*

* Quickly spin up a Create-React-App :bicyclist:

* Install the Flare React package 📦 by running the following in your terminal:
  `npm install flare-react`
  (Flare was rebranded, now known as Rive)
  
* `import FlareComponent from 'flare-react';` 
   in the component file where you will be importing the animation.
   (I imported the animation in the <App /> Class component)

* Initialize the artboard :black_square_button: :
  ```class flareController extends FlareComponent.Controller {
    initialize(artboard) {
      if (artboard.name === "Artboard") {
        this.Art = artboard;
      }
    }

    advance(artboard, elapsed) {
      return true;
    }
  }
   ```
* Add `myFlareController: new flareController()` as the state of the <App /> Class Component.
* Finally add the component
  ```    <FlareComponent
          width={1024}
          height={768}
          animationName="Work"
          file={crab}
          controller={this.state.myFlareController}
        />
    ```
