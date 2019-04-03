import React, { Component } from 'react';

export default class Test extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:8080/test")
        .then(response => response.text())
        .then(response => this.setState({ apiResponse: response }))
        .catch(err => err);
}

componentDidMount() {
    this.callAPI();
}

isa() {
  var objet = JSON.parse(this.state.apiResponse);
  for(let i=0; i<objet.length; i++){
    console.log(objet[i].mark);
    document.getElementById("test").innerHTML += objet[i].mark+" - "+objet[i].model+"<br/>";
  }
}

render() {
  
  return (  
    <div> 
      <button onClick={()=>this.isa()}>Lister</button><br/> 
      <span id="test"></span>
    </div>
    );
}
};