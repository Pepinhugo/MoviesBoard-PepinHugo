/*Composant react Movie de la page d'accueil*/

/*Import des fonctionalités de "React" à partir d'un composant React*/
import React, {Component} from "react";

/* Class qui permet de supprimer la "li Card" de la page d'accueil*/ 
class Movie extends Component{
    render(){

        const {details, onDelete}= this.props;
            return <button onClick={() => onDelete(details.id)}>❌Supprimer</button>
    }

}

/*Export Composant react Movie*/
export default Movie;