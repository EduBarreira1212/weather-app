# Weather App

This project is a Weather App built using React and TypeScript. It fetches weather data from three different APIs using Axios and manages state with Redux. The user interface is styled using Styled Components.

Link to see the project: https://weather-app-eb1212.vercel.app/

## Features

* Fetches weather data from three different APIs
* Displays current weather, forecast, city, state and country
* Responsive design with Styled Components
* State management with Redux
* TypeScript for type safety and better developer experience


## Stack

**Front-end:** React, TypeScript  
**Packages:** Redux, Axios, Styled components

## Learnings

In this project i learned how to use Redux, how to setup a store and create reducers

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Variáveis de Ambiente

To run this project, you need to add this variable in your .env file

`REACT_APP_API_KEY`

To create the API key you have to sign up in this link: https://home.openweathermap.org/users/sign_up

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/EduBarreira1212/weather-app.git
    cd weather-app
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```
3. Inicie o servidor

    ```bash
      npm run start
    ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
## Author

- [@EduBarreira1212](https://github.com/EduBarreira1212)


## Licença

[MIT](https://choosealicense.com/licenses/mit/)