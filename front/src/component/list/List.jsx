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
  var obj = JSON.parse(this.state.apiResponse);
  for(let i=0; i<obj.length; i++){
    console.log(obj[i].image);
    document.getElementById("liste").innerHTML += " <table><tr><img src='http://localhost:8080"+obj[i].image+"' width='50'/</tr><tr><td>Nom:"+obj[i].nom+" </td><td>Prenom:"+obj[i].prenom+"</td></tr></table> <br/>";
  }
  
}


render() {
  
  return (  
    <div> 
      
      <button onClick={()=>
        this.tanisa()
        
      }        
      >Lister</button><br/> 
      <span id="liste"></span>

    </div>
      
    );
}
  
};
  