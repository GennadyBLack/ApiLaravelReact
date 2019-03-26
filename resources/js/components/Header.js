import React, { Component } from 'react';
import {Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Category from './category/Category';



export default class Header extends Component {
    render() {
        return (
         <div> 

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">NewProj</a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
                     </button>

             <div className="collapse navbar-collapse" id="navbarText">
                 <ul className="navbar-nav mr-auto">
                   <li className="nav-item active">

                         <Link className="nav-link" to="/">Home</Link>

                  </li>
             <li className="nav-item">
                             <Link className="nav-link"  to="/about">About</Link>
                </li>
                <li className="nav-item">
                             <Link className="nav-link"  to="/category">Category</Link>
                </li>
                
             </ul>
                 <span className="navbar-text">
    
             </span>
         </div>
        </nav>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/category" component={Category}/>
                <Route exact path="/category/add" component={Category}/>
                <Route exact path="/category/edit/:id" component={Category}/>  
                
                   </div>
              
        );
    }
}
