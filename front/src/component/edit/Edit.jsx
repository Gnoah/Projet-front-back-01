import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangePrenom = this.onChangePrenom.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nom: '',
      prenom: ''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:3000/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                nom: response.data.nom, 
                prenom: response.data.prenom});
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangePersonName(e) {
    this.setState({
      nom: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      prenom: e.target.value
    })  
  }
  onChangeGstNumber(e) {
    this.setState({
      business_gst_number: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nom: this.state.nom,
      prenom: this.state.prenom
    };
    axios.post('http://localhost:8080/list'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));    
    this.props.history.push('/list');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Edit</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nom:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.nom}
                      onChange={this.onChangeNom}
                      />
                </div>
                <div className="form-group">
                    <label>Prenom: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.prenom}
                      onChange={this.onChangePrenom}
                      />
                </div>
                
                <div className="form-group">
                    <input type="submit" 
                      value="OK" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}