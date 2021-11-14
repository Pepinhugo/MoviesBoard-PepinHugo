/*DetailsMovies : Page Détaillée d'un film (informations sur le film recherché)*/
/*Import des fonctionalités de "React" de useState, useEffect à partir de react*/
import React, { useState, useEffect } from "react";

/*Import des fonctionalités de "React" de useParams à partir de react-router*/
import { useParams } from 'react-router';

/*Import des fonctionalités de "axios"*/
import axios from "axios";

/*Fonction qui permet de récupérer et afficher toutes les datas d'une {id} dans une base de données à partir d'une api, grace à axios et à une prop*/ 
const DetailsMovies = () => {


    const [movieId, setMovies] = useState(null);
    const { id } = useParams();

    useEffect(() => { 
      const movieRes = () => {
        axios
          .get(`http://localhost:3000/movies/${id}`)
          .then((listData) => {

            setMovies(listData.data);

        });
    };
    movieRes();
    }, [id]); 

    /*Affichage des données en HTML */
    if(!movieId) return <p>Error, page not found !</p>

    return (

      <div className="detailsMovie">
        <ul>
          <div className="bigCard">
            <div className="cardDetailsMovies">
              <h1>{movieId.title}</h1> 
              <h2>{movieId.release_date}</h2>
              <h3>{movieId.categories}</h3>
              <p>{movieId.description}</p>
              <img src={movieId.poster} alt="img du film"/>
            </div> 

            <div>
              {movieId && movieId.actors.map(({name, character, photo}, index) => (

                <li key={index}>
                  <p>{name}</p>
                  <img src={photo} alt="img de l'acteur"/>
                  <p>{character}</p>
                </li>

              ))}
            </div>

            <div>
              {movieId && movieId.similar_movies.map(({title, poster, release_date}, index )=> ( 

                <li key={index}>
                  <p>{title}</p>
                  <img src={poster} alt="img du film"/>
                  <p>{release_date}</p>
                </li>

              ))}
            </div>  
          </div>
        </ul>  
      </div>
    );
};

/*Export de la fonction due la page DetailsMovies*/
export default DetailsMovies;