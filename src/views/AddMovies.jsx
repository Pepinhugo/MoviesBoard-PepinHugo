/*AddMovies : Page de d'ajout d'un film*/
/*Import des fonctionalités de "React"*/
import React from 'react';

/*Fonction de la page AddMovies pour ajouter un nouveau film à la collection (base de données)*/
const AddMovies = () => {

    /*Formulaires de la page AddMovies */
    return (
        
        <div className="formsAddMovies">
            <br/>
            <form className="form1AddMovies">
                <label for="addMovies">Ajouter un film par : </label>
                    <select name="Sortlist" id="addMoviesForm">
                        <option>Titre du film</option>
                        <option>Date de sortie</option>
                    </select>
            </form>
            <br/>
            <br/>
            <form className="form2AddMovies">
                <label for="addMovies">Information sur le film à ajouter : </label>
                    <br/>
                    <br/>
                        <label for="addMovies">Titre du film : </label>    
                        <input type="text" placeholder="Spider Man: Far From Home"/>
                        <br/>
                        <br/>

                        <label for="addMovies">Date du film : </label>
                        <input type="date" placeholder="2019-06-28"/>
                        <br/>
                        <br/>

                        <label for="addMovies">Description du film : </label>
                        <br/>
                        <br/>
                        <textarea rows="4" cols="50" placeholder="Peter et ses amis passent leurs vacances d’été en Europe. Mais ils n’auront pas vraiment l’occasion de se reposer puisque Peter accepte d’aider Nick Fury pour débusquer les mystérieuses créatures qui sont la cause des catastrophes naturelles qui frappent le continent."></textarea>
                        <br/>
                        <br/>

                        <label for="addMovies">URL de ce film : </label>
                        <input type="url" placeholder="https://www.allocine.fr/film/fichefilm_gen_cfilm=222291.html"/>
                        <br/>
                        <br/>
                    
                <button>➕ Ajouter</button>
                <br/>
                <br/>
            </form>
        </div>
    );
};
/*Export de la fonction due la page AddMovies*/
export default AddMovies;