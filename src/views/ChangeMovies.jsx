/*ChangeMovies : Page de modification d'un film*/
/*Import des fonctionalités de "React"*/
import React from 'react';

/*Fonction de la page ChangeMovies pour modifier un film de la collection (base de données)*/
const ChangeMovies = () => {

    /*Formulaires de la page ChangeMovies */
    return (
        
        <div className="formsChangeMovies">
            <br/>
            <form className="form1ChangeMovies">
                <label for="changeMovies">Modifier un film par :  * </label>
                    <select name="Sortlist" id="changeMoviesForm">
                        <option>Titre du film</option>
                        <option>Date de sortie</option>
                    </select>
            </form>
            <br/>
            <br/>
            <form className="form2ChangeMovies">
                <label for="changeMovies">Informations sur le film à modifier :  * </label>
                    <br/>
                    <br/>
                        <label for="changeMovies">Titre :  * </label>    
                        <input type="text" placeholder="Spider Man: Far From Home"/>
                        <br/>
                        <br/>

                        <label for="changeMovies">Date de sotie :  * </label>
                        <input type="date" placeholder="2019-06-28"/>
                        <br/>
                        <br/>

                        <label for="changeMovies">Description :  * </label>
                        <br/>
                        <br/>
                        <textarea rows="4" cols="50" placeholder="Peter et ses amis passent leurs vacances d’été en Europe. Mais ils n’auront pas vraiment l’occasion de se reposer puisque Peter accepte d’aider Nick Fury pour débusquer les mystérieuses créatures qui sont la cause des catastrophes naturelles qui frappent le continent."></textarea>
                        <br/>
                        <br/>

                        <label for="changeMovies">URL :  * </label>
                        <input type="url" placeholder="https://www.allocine.fr/film/fichefilm_gen_cfilm=222291.html"/>
                        <br/>
                        <br/>

                        <label for="changeMovies">Affiche du film : </label>
                        <input type="url" placeholder="https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/086/spider-man-far-from-home-affiche-1086624.jpeg"/>
                        <br/>
                        <br/>

                        <label for="changeMovies">Backdrop du film : </label>
                        <input type="url" placeholder="https://wall.alphacoders.com/by_sub_category.php?id=304975name=Spider-Man%3A+Far+From+Home+Fonds+d%27%C3%A9cranlang=French"/>
                        <br/>
                        <br/>
                        <br/>

                        <label for="changeMovies">Liste des Acteurs :  * </label>
                        <br/>
                        <br/>
                        <label for="changeMovies">Noms des acteurs :  * </label>
                        <input type="text" placeholder="Samuel L. Jackson"/>
                        <br/>
                        <label for="changeMovies">Photos des acteurs :  * </label>
                        <input type="url" placeholder="https://moviefit.me/fr/persons/430-samuel-l-jackson"/>
                        <br/>
                        <br/>
                        <button>🖊 Modifier</button>
                        <button>❌ Supprimer</button>
                        <br/>
                        <br/>

                        <label for="changeMovies">Films similaires :  * </label>
                        <br/>
                        <br/>
                        <label for="changeMovies">Noms des films similaires :  * </label>
                        <input type="text" placeholder="Captain Marvel"/>
                        <br/>
                        <label for="changeMovies">Photos des films similaires :  * </label>
                        <input type="url" placeholder="https://www.allocine.fr/film/fichefilm-141110/dvd-blu-ray/?cproduct=2309398"/>
                        <br/>
                        <label for="changeMovies">Dates de sortie des films similaires :  * </label>
                        <input type="date" placeholder="2019-03-06"/>
                        <br/>
                        <br/>
                        <button>🖊 Modifier</button>
                        <button>❌ Supprimer</button>
                        <br/>
                        <br/>
                    
                <button>🖊 Modifier</button>
                <br/>
                <br/>
            </form>
        </div>
    );
};

/*Export de la fonction de la page ChangeMovies*/
export default ChangeMovies;