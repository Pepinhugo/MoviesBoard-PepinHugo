/*Composant react du formulaire de la page d'accueil*/

/*Import des fonctionalitésde "React" et de "useSate" à partir de React*/
import React, {useState} from "react";

/* Fonction du formulaire de la page d'accueil*/
const Form = props => {

    const [nouveauMovie, setNouveauMovie] = useState("");

    /*Fonction qui permet de récupérer les éléments qui ont été écrits dans le champ input du formulaire*/ 
    const handleFormChange = (event) =>{
        setNouveauMovie(event.currentTarget.value);
    };

    /*Fonction qui permet d'envoyer les éléments qui ont été récupéré en cliquant sur un bouton de type submit*/ 
    const handleSubmit = (event) =>{
        event.preventDefault();
    
        const id = new Date().getTime();
        const nom = nouveauMovie;

        props.onMovieAdd({id, nom});
        setNouveauMovie("");

    };

    
        return  (
        
        /*Ce que retourne la Fonction du formulaire en HTML*/
        <form onSubmit={handleSubmit} className="formHome">
            <input value={nouveauMovie} onChange={handleFormChange} type="text" placeholder="Ajouter un film"/>
                <select>
                    <option value="title">Titre du film</option>
                    <option value="datetime">Date de sortie</option>
                    <option value="category">Catégorie</option>
                </select>
            <button>🔍</button>
        </form>

        ); 
}

/*Exportation du composant Form*/
export default Form;