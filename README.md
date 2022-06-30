# Video Monkey Website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It was made using following stack of technologies:
* React, Redux
* formik, react-redux, redux-thunk, axios
* SCSS, Ant Design

<p>The working version of the app you can see and try via the link: https://artemmufazalov.github.io/video_monkey</p>

<p>
It has landing, functionality for registration with registration confirmation via email, functionality for authorisation and authentication.
<br/>
After users are logged in, they are auth via saved in browser cache JWT token.
</p>

<p>The backend part of the app is in the following repository: https://github.com/artemmufazalov/video_monkey_backend</p>

### Run repository on your computer
Use git clone command to download source code to your computer.
```
git clone https://github.com/artemmufazalov/video_monkey.git
```
Then use `npm install` in the project directory to install all necessary modules to run the app.
```
npm install
```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode on [http://localhost:3000](http://localhost:3000)

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run predeploy`
Builds project for deploing to GH-pages.

### `npm run deploy`
Deployes project to GH-pages.

### `npm run pretty`
Prettifies all the files in project directory with configs in .prettierrc ignoring files from .prettierignore.

### `npm run prepare`
Init pre-commit git hook with husky, that run prettier on staged files before the commit.

### `npm run eject`
This command will remove the single build dependency from your project. 
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) 
into your project as dependencies in package.
