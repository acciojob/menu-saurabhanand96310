// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//       <App />
// );
import React from 'react';
import ReactDOM from 'react-dom'; // No createRoot in React 16
import Menu from './components/App';

ReactDOM.render(<Menu />, document.getElementById('root'));
