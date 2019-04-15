import React, { Component } from "react";
import './Ajouter.css'

export default class Ajouter extends Component{


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

    render(){
        return(
            <div>
                <form className="form-inline" action={"http://localhost:8080/list"} method="POST" style={{ marginTop: 20, marginBottom: 30 } }>
                    <label for="nom" className="mr-sm-2"> Nom</label> <input type="text" name="nom" required="true" className="form-control mr-sm-2"/>
                    <label for="prenom" className="mr-sm-2"> Prenom</label> <input type="text" name="prenom" required="true" className="form-control mr-sm-2"/>
                    <button className="btn btn-primary mr-sm-2">Ajouter</button>
                </form>
            </div>
            
        )
    }
};