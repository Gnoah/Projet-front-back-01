import React, { Component } from "react";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import List from './List';

export default class Put extends Component{

    render(){
        return(

            <button
            onClick={()=>{
                confirmAlert({
                  customUI: ({ onClose }) => {
                    return (
                      <div id="bt" className='custom-ui'>
                        <div className="fermer">
                          <button id="flot" onClick={onClose}>X</button>
                        </div>
                        <div>
                           <div>
                              <form action={"http://localhost:8080/list"} method="POST" enctype="application/x-www-form-urlencoded">
                              <input type="hidden" name="mehtod" value="PUT" />
                              <span>Nom:</span><input type="text" name="nom"  placeholder={List.props.obj.nom} />
                              <span>Prenom:</span><input type="text" name="prenom"  placeholder={List.props.obj.prenom} />
                              <input type="hidden" name="id" />
                              <button type="submit">OK</button>
                              </form>
                          </div>
                            
                        </div>
                      </div>
                    );
                  }
                });
               
            }}
            > Edit</button>     
    )   
    }
};