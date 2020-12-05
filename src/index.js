import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FEATURES from './STORE'
import App from './components/App';


ReactDOM.render(<App features={FEATURES}/>, document.getElementById('root'));
