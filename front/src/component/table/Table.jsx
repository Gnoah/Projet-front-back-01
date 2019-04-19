import React, { Component } from 'react'; 
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import './Table.css'

class Table extends Component {
  
  render() {
    return (
        <tr >
          <td>
            {this.props.obj.id}
          </td> 
          <td className="tex">
            {this.props.obj.nom}
          </td> 
          <td className="tex">        
            {this.props.obj.prenom}
          </td>
          <td>
          <button className="btn btn-danger"
            onClick={()=>{
                confirmAlert({
                  customUI: ({ onClose }) => {
                    return (
                      <div id="bt" className='custom-ui'>

                        <div>
                           <div id="ground">
                              <h4>Confirmer la suppression</h4>
                              <form action={"http://localhost:8080/list?_method=DELETE"} method="POST" enctype="application/x-www-form-urlencoded">
                                <input type="hidden" name="_method" value="DELETE" />
                                <table>
                                  <tr>
                                    <td> <span>{this.props.obj.nom.charAt(0).toUpperCase() + this.props.obj.nom.substring(1).toLowerCase()}</span></td>&nbsp;&nbsp;
                                    <td> <span>{this.props.obj.prenom.charAt(0).toUpperCase() + this.props.obj.prenom.substring(1).toLowerCase()}</span> </td>
                                  </tr>
                                </table>
                                <input type="hidden" name="id" value={this.props.obj.id}/> <br/>
                                <div id="centr">
                                    <button type="submit" className="btn btn-secondary btn-sm">OUI</button>
                                    <button className="btn btn-secondary btn-sm" onClick={onClose}>NON</button>
                                </div>
                             
                              </form>
                          </div>
                            
                        </div>
                      </div>
                    );
                  }
                });
               
            }}
            > X</button> 
            &nbsp;&nbsp;&nbsp;           
          <button className="btn btn-success"
            onClick={()=>{
                confirmAlert({
                  customUI: ({ onClose }) => {
                    return (
                      <div id="bt" className='custom-ui'>

                        <div>
                           <div id="ground">
                              <form action={"http://localhost:8080/list?_method=PUT"} method="post" enctype="application/x-www-form-urlencoded">
                                <input type="hidden" name="_method" value="put" />
                                <table>
                                  <tr>
                                    <td>Nom:</td>
                                    <td><input type="text" name="nom"  placeholder={this.props.obj.nom.charAt(0).toUpperCase() + this.props.obj.nom.substring(1).toLowerCase()}/></td>
                                  </tr>
                                  <tr>
                                    <td>Prénom:</td>
                                    <td><input type="text" name="prenom"  placeholder={this.props.obj.prenom.charAt(0).toUpperCase() + this.props.obj.prenom.substring(1).toLowerCase()}/></td>
                                  </tr>
                                </table>
                                <input type="hidden" name="id" value={this.props.obj.id}/> <br/>
                                <div id="centr">
                                    <button type="submit" className="btn btn-secondary btn-sm">OK</button>
                                    <button className="btn btn-secondary btn-sm" onClick={onClose}>Annuler</button>
                                </div>
                             
                              </form>
                          </div>
                            
                        </div>
                      </div>
                    );
                  }
                });
               
            }}
            > Edit</button>            
          </td>
        </tr>
    );
  }
}

export default Table;