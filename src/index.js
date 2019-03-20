import React from 'react';
//import Able from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';

import { BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './pp.css';

ReactDOM.render(
    <BrowserRouter>
        <App />
    
    </BrowserRouter>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
