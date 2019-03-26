import React, { Component } from 'react';
import {Link ,Route} from "react-router-dom";
import Listing from './Listing';
import Edit from './Edit';
import Add from './Add';



export default class category extends Component {
    render() {
        return (
            <div className="container" >
                     <div> 
                            <hr/>
                                <Link to='/category' className="btn btn-primary">Listing</Link> &nbsp;
                                <Link to='/category/add' className="btn btn-primary">Add</Link>
                            <hr/>
                         <br/>
                     </div>
                                <Route exact path="/category" component={Listing}/>
                                <Route exact path="/category/add" component={Add}/>
                                <Route exact path="/category/edit/:id" component={Edit}/>  
            </div>
           
        );
    }
}
