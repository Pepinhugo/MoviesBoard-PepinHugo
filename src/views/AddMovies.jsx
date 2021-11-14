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
                <label for="addMovies">Ajouter un film par :  * </label>
                    <select name="Sortlist" id="addMoviesForm">
                        <option>Titre du film</option>
                        <option>Date de sortie</option>
                    </select>
            </form>
            <br/>
            <br/>
            <form className="form2AddMovies">
                <label for="addMovies">Informations sur le film à ajouter :  * </label>
                    <br/>
                    <br/>
                        <label for="addMovies">Titre :  * </label>    
                        <input type="text" placeholder="Spider Man: Far From Home"/>
                        <br/>
                        <br/>

                        <label for="addMovies">Date de sotie :  * </label>
                        <input type="date" placeholder="2019-06-28"/>
                        <br/>
                        <br/>

                        <label for="addMovies">Description :  * </label>
                        <br/>
                        <br/>
                        <textarea rows="4" cols="50" placeholder="Peter et ses amis passent leurs vacances d’été en Europe. Mais ils n’auront pas vraiment l’occasion de se reposer puisque Peter accepte d’aider Nick Fury pour débusquer les mystérieuses créatures qui sont la cause des catastrophes naturelles qui frappent le continent."></textarea>
                        <br/>
                        <br/>

                        <label for="addMovies">URL :  * </label>
                        <input type="url" placeholder="https://www.allocine.fr/film/fichefilm_gen_cfilm=222291.html"/>
                        <br/>
                        <br/>

                        <label for="addMovies">Affiche du film : </label>
                        <input type="url" placeholder="https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/086/spider-man-far-from-home-affiche-1086624.jpeg"/>
                        <br/>
                        <br/>

                        <label for="addMovies">Backdrop du film : </label>
                        <input type="url" placeholder="https://wall.alphacoders.com/by_sub_category.php?id=304975name=Spider-Man%3A+Far+From+Home+Fonds+d%27%C3%A9cranlang=French"/>
                        <br/>
                        <br/>
                        <br/>

                        <label for="addMovies">Liste des Acteurs :  * </label>
                        <br/>
                        <br/>
                        <label for="addMovies">Noms des acteurs :  * </label>
                        <input type="text" placeholder="Samuel L. Jackson"/>
                        <br/>
                        <label for="addMovies">Photos des acteurs :  * </label>
                        <input type="url" placeholder="https://moviefit.me/fr/persons/430-samuel-l-jackson"/>
                        <br/>
                        <br/>
                        <button>➕ Ajouter</button>
                        <button>❌ Supprimer</button>
                        <br/>
                        <br/>

                        <label for="addMovies">Films similaires :  * </label>
                        <br/>
                        <br/>
                        <label for="addMovies">Noms des films similaires :  * </label>
                        <input type="text" placeholder="Captain Marvel"/>
                        <br/>
                        <label for="addMovies">Photos des films similaires :  * </label>
                        <input type="url" placeholder="https://www.allocine.fr/film/fichefilm-141110/dvd-blu-ray/?cproduct=2309398"/>
                        <br/>
                        <label for="addMovies">Dates de sortie des films similaires :  * </label>
                        <input type="date" placeholder="2019-03-06"/>
                        <br/>
                        <br/>
                        <button>➕ Ajouter</button>
                        <button>❌ Supprimer</button>
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