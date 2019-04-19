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
                    <label for="nom" className="imput mr-sm-2"> Nom</label> <input type="text" name="nom" required="true" className="form-control mr-sm-2"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label for="prenom" className="imput mr-sm-2"> Prénom</label> <input type="text" name="prenom" required="true" className="form-control mr-sm-2"/>
                    <div className="ajout">
                        <button className="btn btn-primary btn-block" >Ajouter</button>
                    </div>
                   
                </form>
            </div>
            
        )
    }
};

