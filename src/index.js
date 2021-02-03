import React from 'react';
import ReactDOM from 'react-dom';
import withReduxFeatures from './withReduxFeatures';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import './styles/index.css';

/** Wrap App component with store providers */
const WrappedApp = withReduxFeatures(App);

ReactDOM.render(<WrappedApp />, document.getElementById('root'));

/**
 * If you want your app to work offline and load faster,
 * you can change unregister() to register() below.
 * Note this comes with some pitfalls.
 * @see https://bit.ly/CRA-PWA
 */
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();