import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import List from './component/list/List';
import Test from './component/test/Test';
import Ajouter from './component/ajouter/Ajouter'
import './App.css';

class App extends Component {




  
  render() {
    return (
      
        <Router>
           <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <Route path="/test" exact component={Test} />
                <Route path="/list" component={List} /> 
                <Route path="/ajouter" component={Ajouter} />  
              </div> 
              <div className="col-md-1"></div>  
            </div>                   
          </div>
        </Router>
      
        
    );
  }
}

export default App;
