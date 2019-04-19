import React, { Component } from 'react';
import axios from 'axios';
import Table from '../table/Table';
import Ajouter from '../ajouter/Ajouter';
import Spinner from 'react-spinner-material';
import { Alert } from 'reactstrap';
import './List.css'


export default class List extends Component {

  constructor(props) {
      super(props);
      this.state = {list: [],isLoading: true };
    }
    
    componentDidMount(){
      axios.get('http://localhost:8080/list')
        .then(
          response => {
          setTimeout(() => { 
            this.setState({ 
              list: response.data, 
              isLoading: false});
            },1000)

          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )

        

        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.list.map(function(object, i){
          return <Table obj={object} key={i} />;
      });
    }

    

    render() {
      return (
        <div>
          {(this.state.isLoading)?
          ( <Alert className="popedit" color="secondary">
          <div id="spin">
              <Spinner size={50} spinnerColor={"ff0059 "} spinnerWidth={50} visible={true} />
          </div>
          </Alert>)
            :('')}
          <div>
            < Ajouter/>
            <table className="table table-bordered table-hover" style={{ marginTop: 20 }}>  
              <thead>
                <th>Id</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Actions</th>
              </thead>
              <tbody>
                { this.tabRow() }
              </tbody>
            </table>
          </div>
        </div>
        
      );
    }
  }

