import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter} from 'react-router-dom';

export default class Example extends Component {
    render() {
        return (
                <div >                
                    <Header/>
                     <Footer/>
                </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<BrowserRouter><Example /></BrowserRouter>, document.getElementById('app'));
}
