import React, { Component } from "react";

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
                <form action={"http://localhost:8080/list"} method="POST">
                    <label> Nom:</label> <input type="text" name="nom"/>
                    <label> Prenom:</label> <input type="text" name="prenom"/>
                    <button>Ajouter</button>
                </form>
            </div>
            
        )
    }
};