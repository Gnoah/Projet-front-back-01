import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import List from './component/list/List';
import Test from './component/test/Test';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
           <div>
                <Route path="/test" exact component={Test} />
                <Route path="/list" component={List} />                         
          </div>
        </Router>
    );
  }
}

export default App;