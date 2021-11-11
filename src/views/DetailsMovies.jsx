/*DetailsMovies : Page Détaillée d'un film (informations sur le film recherché)*/
/*Import des fonctionalités de "React" de useState, useEffect à partir de react*/
import React, { useState, useEffect } from "react";

/*Import des fonctionalités de "React" de useParams à partir de react-router*/
import { useParams } from 'react-router';

/*Import des fonctionalités de "axios"*/
import axios from "axios";

/*Fonction qui permet de récupérer et afficher toutes les datas d'une {id} dans une base de données à partir d'une api, grace à axios et à une prop*/ 
const DetailsMovies = ({id}) => {


    const [movieId, setMovies] = useState([]);
    id = useParams().id;

    useEffect(() => {
    axios
      .get(
        `http://localhost:3000/movies/`
      )
      .then((listData) => {
        setMovies(listData.data);
        console.log(listData.data);

      });
    }, [id]); 


    /*Affichage des données en HTML */
    return (
        <div className="detailsMovie">
            <ul>
                {movieId.map((props)=> (

                  <li key={props.id}>
                      <h1>{props.title}</h1>
                      <h2>{props.release_date}</h2>
                      <h3>{props.categories}</h3>
                      <p>{props.description}</p>
                      <img src={props.poster} alt="img du film"/>
                      <img src={props.backdrop} alt="img arrière plan du film"/>
                        <li>
                            <p>{props.actors.name}</p>
                            <img src={props.actors.photo} alt="img de l'acteur"/>
                            <p>{props.actors.character}</p>
                        </li>
                        <li>
                            <p>{props.similar_movies.title}</p>
                            <img src={props.similar_movies.poster} alt="img du film"/>
                            <p>{props.similar_movies.release_date}</p>
                        </li>
                     
                  </li>

                ))}
            </ul>   
        </div>
    );
};

/*Export de la fonction due la page DetailsMovies*/
export default DetailsMovies;