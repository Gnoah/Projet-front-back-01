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
    console.log(obj[i].nom);
    document.getElementById("liste").innerHTML += obj[i].nom+" "+obj[i].prenom+"<br/>";
  }
  
  //document.getElementById("liste").innerHTML = obj.map(obj.nom);
}

render() {
  
  return (  
    <div> 
      
      <button onClick={()=>
        this.tanisa()
        /*liste = document.getElementById("liste")
        liste.innerHTML = numbers.map(obj);*/
        
      }        
      >Lister</button><br/> 
      <span id="liste"></span>
    </div>
    );
}
  /*constructor(props) { 
    super(props); 
    this.state = { 
      results: null
    }; 

   }  
   componentDidMount() { 
    const data = new FormData(); 
    fetch('http://localhost:8080/list',{    method: 'POST',   body : data })   
    .then(     (response) => { 
    console.log("response");        
    console.log(response);         
    response.json().then((result)=>this.setState({ results: result }))      
   } )// if the response is a JSON object   )
   .catch(   error => null )      }   
   render() {
    return (   
    <div className="Files"> 
    <button onClick={this.state.list}>Lister</button>  
   </div>   );   
  }*/
};
  