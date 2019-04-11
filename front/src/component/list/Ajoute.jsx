import { Component } from "react";

export default class Ajoute extends Component{
    constructor() {
        super();
        this.state = {
          nom: '',
          prenom: ''
        };
      }
      onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }
      onSubmit = (e) => {
        e.preventDefault();
    
        const { nom, prenom} = this.state;
    
        // axios.post('/api/book', { nom,prenom})
        //   .then((result) => {
        //     this.props.history.push("/")
        //   });
      }
    

    render(){
        const { nom, prenom} = this.state;
        return(
            <div>
                <table>
                    <tr>
                        <td>Nom: </td>
                        <td> <input type="text" class="form-control" name="nom" value={nom} onChange={this.onChange} /></td>
                    </tr>
                    <tr>
                        <td>Prenom:</td>
                        <td><input type="text" class="form-control" name="prenom" value={prenom} onChange={this.onChange} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td> <button type="submit" class="btn btn-default">Ajouiter</button> </td>
                    </tr>
                </table>
            </div> 
        )
    }
}