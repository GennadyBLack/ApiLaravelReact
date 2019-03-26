import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pagination from "react-js-pagination";


export default class About extends Component {

  constructor(props) {
    super(props);

    this.handlePageChange = this.handlePageChange.bind(this);

       this.state = {
          categories:[],
          activePage:1,
          totalItemCount:1,
          itemsCountPerPage:4,//pagination number
         };
  }

  componentDidMount(){
    axios.get('http://newproj/api/category').then(response=>{
      this.setState({
        categories:response.data.data,
        totalItemCount:response.data.total,
      });
    });
  }

onDelete(categoryId){
axios.delete('http://newproj/api/category/delete/' + categoryId )
.then(response =>{
  var categories = this.state.categories;
  for(var i = 0;i < categories.length; i++){
        if(categories[i].id == categoryId){
            categories.splice(i,1);
            this.setState({categories:categories})
  }  }})}
       

handlePageChange(pageNumber) {
  console.log(`active page is ${pageNumber}`);
  this.setState({activePage: pageNumber});

  axios.get('http://newproj/api/category?page=' + pageNumber).then(response=>{
    this.setState({categories:response.data.data});
  });

}

    render() {
        return (
        <div>
            <table className="table table-striped table-dark">
  <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Status</th>
          <th scope="col">Create</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
          <th scope="col">Edit</th>
        </tr>
  </thead>
  <tbody>
     { this.state.categories.map(category=>{
          return(
              <tr key={category.id}>
                <th scope="row">{category.id}</th>
                <td>{category.name}</td>
                <td>{category.active?("Active"):("InActive")}</td>
                <td>{category.created_at}</td>
                <td>{category.updated_at}</td>
                <td><a className="btn btn-danger" onClick={this.onDelete.bind(this,category.id)}>Delete</a></td>
                <td><Link to={`category/edit/${category.id}`} className="btn btn-primary">Edit</Link></td>
              </tr>
            )
          })
       }
  </tbody>
        </table>
              <div className="d-flex justify-content-center ">
                      <Pagination
                        linkClass="page-item"
                        itemClass="page-link"
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemCount}
                        onChange={this.handlePageChange}
                      />
                </div>
            
    </div>       
        );
    }
}
