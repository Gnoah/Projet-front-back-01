import React from 'react';

const Show = props => (  
  
	<table className="table table-striped table-bordered">
		<thead className="thead-dark">
			<tr>
          <th>Id</th>
          <th>Produits</th>
          <th>Prix</th>
          <th>Actions</th>
			</tr>
		</thead>
		<tbody>
			{props.obj.length > 0 ? (
                
				props.objs.map(obj => (
          
					<tr key={obj.prenom}>            
                        <td> {obj.id+1}</td>
                        <td> <img src={'http://localhost:8080'+obj[i].image} width='50'/></td>
                        <td className="pren"> {obj.prenom}</td>            
            			<td className="pren"> {obj.nom}</td> 			
					</tr>
          
          
                ))
      ) : ''}
      
		</tbody>    
	</table>
)

export default Show;