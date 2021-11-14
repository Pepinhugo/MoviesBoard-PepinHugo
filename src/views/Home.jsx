/*Home : Page d'Accueil du site*/
/*Import des fonctionalités de "React" de useState, useEffect à partir de react*/
import React, { useState, useEffect } from "react";

/*Import des fonctionalités de "axios"*/
import axios from "axios";

/*Import des fonctionalités de "React" de "Link" à partir de react-router-dom*/
import { Link } from "react-router-dom";

/*Import des composants Form et Movie*/
import Form from "../components/Form";
import Movie from "../components/Movie";

/*Fonction qui affiche les Cards des films présents sur la pages d'accueil*/
const Home = () => {
 
    
  const [movies, setMovies] = useState([]);

  /*Récupération des datas d'un film avec axios dans la base de données et affichage de ces données */
    useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((list) => {
        setMovies(list.data);

      });
    }, []); 

    /*Fonction de suppression d'un film (Card)*/
     const handleDelete = (id) =>{

      /*Alerte de confirmation avant la supression du film (Card)*/
      alert("Etes-vous sur de vouloir supprimer ?");

      const newMovies = movies.slice();

      const index = newMovies.findIndex((movie) => {

        return movie.id === id;  

      });
   
        newMovies.splice(index, 1);
        setMovies(newMovies);
     };
 
  

    /*Ce que retourne la fonction en HTML */
    return (
      <div className="Card">

        <Form/>

          <ul>
            {movies.map((movie)=> (

              <li key={movie.id}>

                <h1>{movie.title}</h1>
                <br/>
                <Link exact to ={"DetailsMovies/"+ movie.id}><img src={movie.poster} alt="img du film"/></Link> 
                <br/>
                <h2>{movie.release_date}</h2>
                <p>{movie.description}</p>
                <Link exact to ="ChangeMovies"><button>🖊 Modifier</button></Link>

                  {movies.map((movie)=> {
                    return <Movie details = {movie} onDelete={handleDelete}/>
                  })}
              </li>
            ))}
        </ul>
      </div>
    );
};

/*Export de la fonction de la page Home*/ 
export default Home;