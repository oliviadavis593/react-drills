# Drill #1 'Hello World'

- Assignment: A component that changes its display according to buttons that update state. Utilising event handlers and state.

 1. Make a component called HelloWorld inside the ./src/state-drills/ folder. Update your index.js to use the HelloWorld component to check that it works
 
 2. The component should render an outter div element. Inside the div there should be p element containing Hello, world. The word "world" should come from state in a property named who.
 
 3. The component should also display 3 buttons, one for each: "World", "Friend" and "React".
 
 4. When a user clicks on one of the three buttons, use state and an event handler to update the state property who so that the content in the p element changes.
 
 5. If the user clicks the "Friend" button, the p displays Hello, friend!.
 
 6. If the user clicks the "React" button, the p displays Hello, React!.
 
 7. If the user clicks the "World" button, the p displays Hello, world!.
 
 # Drill #2 'Bomb'
 
 - Assignment: A component that uses life-cycles, setInterval and state to alternate between rendering either "tick" or "tock" until a time passes and then rendering "BOOM!!!!".
 
 1. Make a component called Bomb inside the ./src/state-drills/ folder. Update your index.js to use the Bomb component to check that it works.
 
 2. The component should render a div element. Inside the div there should be a p that contains content of either "tick", "tock" or "BOOM!!!!".
 
 3. The component will have an initial state with a property count of 0.
 
 4. When the component mounts, register an interval that adds one to the count in state every second.
 
 5. When the component unmounts, clear the interval.
 
 6. When the count is divisible by 2, display the word "tick".
 
 7. When the count isn't divisible by 2, display the word "tock".
 
 8. If the count goes equal to or above 8, display "BOOM!!!!".
 
 9. When the count goes above or equal to 8, also clear the interval!
 
 # Drill # 3 'RouletteGun'
 
 - Assignment: A component that combines state and props. The parent of this component will pass in a prop that says which number chamber contains a bullet, the chamber should be between 1 and 8. When a user clicks on a button, the component will choose a random chamber and pull the trigger! If the chamber with the bullet in is chosen, the component will render BANG!!!!
 
 1. Make a component called RouletteGun inside the ./src/state-drills/ folder. Update your index.js to use the RouletteGun component to check that it works.
 
 2. The component should render a div element.
 
 3. Inside the div, there should be a p that contains the content of either:
      - spinning the chamber and pulling the trigger! ...
      - you're safe!
      - BANG!!!!
      
 4. Inside the div, there should also be a button that contains Pull the trigger!.
 
 5. The component will have an initial state with 2 properties, chamber that is initially set to null, and spinningTheChamber that is initially set to false.
 
 6. The component will accept a prop called bulletInChamber that has a default value of 8.
 
 7. When the user clicks the button, there should be a click event handler. In the handler, the following steps.
      - The state should update spinningTheChamber to be true.
      - A timeout should be registered for 2 seconds.
      - Within the timeout, a random number between 1 and 8 should be generated.
      - Within the timeout, the state should be updated so that the generated random number is the new value for chamber and the spinningTheChamber should be false.
    
 8. The component should render the content of the p element according to the following rules:
      - If spinningTheChamber is true, render spinning the chamber and pulling the trigger! ....
      - If the chamber value in state is the same as the bulletInChamber value in props, render BANG!!!!.
      - Otherwise, render you're safe!!
      
 9. If the component is to be unmounted, clear the timeout.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
