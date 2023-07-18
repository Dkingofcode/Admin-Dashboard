import React from 'react';
import ReactDOM from 'react-dom';
import { ContexProvider  } from './contexts/ContextProvider';
import App from './App';


ReactDOM.render(<ContexProvider><App /></ContexProvider>, document.getElementById('root'));