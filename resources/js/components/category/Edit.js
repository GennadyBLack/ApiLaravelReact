import React, { Component } from 'react';
import axios from 'axios';
import AlertSuccess from './AlertSuccess';
import AlertError from './AlertError';



export default class Edit extends Component {

    constructor(props){
        super(props);  

        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state ={
            category:'',
            alert_message:"",
        }
    }


    componentDidMount(){
        axios.get('http://newproj/api/category/edit/' + this.props.match.params.id).then(response=>{
          this.setState({category:response.data.name});
        });
      }

    onChangeCategoryName (e){
        this.setState({
            category:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const category = {
            category_name : this.state.category
        }

        axios.put('http://newproj/api/category/update/'+ this.props.match.params.id , category)
        .then(res => {
            this.setState({alert_message:'success'})
        }).catch(error=>{
            this.setState({alert_message:'error'})
        });
    }

    render() {
        return (
            <div className="container">
            <div>

        {this.state.alert_message == 'success' ? <AlertSuccess/> : null}
        {this.state.alert_message == 'error' ? <AlertError/> : null}
     
            </div>
                <form onSubmit={this.onSubmit}> 
                    <div className="form-group">
                        <label htmlFor="category_name">Category Name</label>
                        <input type="text"
                         className="form-control"
                         value={this.state.category}
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
