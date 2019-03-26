import React, { Component } from 'react';
import axios from 'axios';

export default class Add extends Component {

    constructor(props){
        super(props);  
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state ={
            category_name:'',
        }
    }

    onChangeCategoryName (e){
        this.setState({
            category_name:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const category = {
            category_name : this.state.category_name
        }

        axios.post('http://newproj/api/category/store' , category)
        .then(
            this.setState({category_name:''})
        );
        
        
    }

    render() {
        return (
            <div className="container">
                    
                <form onSubmit={this.onSubmit}> 
                    <div className="form-group">
                        <label htmlFor="category_name">Category Name</label>
                        <input type="text"
                         className="form-control"
                         value={this.state.category_name}
                         onChange={this.onChangeCategoryName}
                        id="category_name"
                        aria-describedby="Name"
                        placeholder="Enter Category Name"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        );
    }
}
