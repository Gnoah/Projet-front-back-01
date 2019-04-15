import React, { Component } from 'react';
import axios from 'axios';
import Table from '../table/Table';
import Ajouter from '../ajouter/Ajouter'

import './List.css'
export default class List extends Component {

  constructor(props) {
      super(props);
      this.state = {list: []};
    }
    componentDidMount(){
      axios.get('http://localhost:8080/list')
        .then(response => {
          this.setState({ list: response.data });
        })
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
          < Ajouter/>
          <table className="table table-striped" style={{ marginTop: 20 }}>  
            <thead>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Actions</th>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }

/*
import React, { Component } from 'react';

export default class List extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:8080/list")
          .then(response => response.text())
          .then(response => this.setState({ apiResponse: response }))
          .catch(err => err);
  }

  componentDidMount() {
      this.callAPI();
  }

  tanisa() {
    console.log(this.state.apiResponse);
    var obj = JSON.parse(this.state.apiResponse);
    console.log(obj);
    for(let i=0; i<obj.length; i++){
      document.getElementById("liste").innerHTML += " <table><tr><td>Nom:"+obj[i].nom+" </td><td>Prenom:"+obj[i].prenom+"</td><td><button onClick="+{()=>
        modifier(i)}+">Edit</button></td></tr></table> <br/>";
    }
    
  }

  modifier(id){
    <form action={"http://localhost:8080/list"} method="PUT">
        <label> Nom:</label> <input type="text" name="nom" value={obj[id].nom}/>
        <label> Prenom:</label> <input type="text" name="prenom" value={obj[id].prenom}/>
        <button>OK</button><button>Annuler</button>
    </form>
  }

  render() {
    
    return (  
      <div> 
          <span id="modier"></span>
          <button onClick={()=>
              this.tanisa()       
            }        
            >Lister</button><br/> obj[i].nom
          <span id="liste"></span>
      </div>
      );
  }  
};
*/