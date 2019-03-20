import React, { Component } from 'react';
//import Hidden from './Hidden';
import './App.css';
import Radium from 'radium';
//import Penut from './Penut';
import './pp.css';
import Blog from './Blog';

//import { BrowserRouter } from 'react-router-dom';


class App extends Component {
    render() {
        return (

            <div>
                <Blog />
            </div>
        );
    }

}
export default Radium(App);
    //export default Radium(person);

