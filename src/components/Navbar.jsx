/*Composant react Navbar(navigation/menu) de l'application*/

/*Import des fonctionalités de "React"*/
import React from 'react';
/*Import des fonctionalités de "NavLink" à partir de "react-router-dom"*/
import { NavLink } from "react-router-dom";

/*Fonction Navbar et se qu'elle renvoie en HTML*/
const Navbar = () => {
    return (
    
        <div className="navigation">
            <NavLink exact to ="/" activeStyle={{color: 'gray'}}>Accueil</NavLink>
            <NavLink exact to ="DetailsMovies" activeStyle={{color: 'gray'}}>DetailsFilm</NavLink>
            <NavLink exact to ="ChangeMovies" activeStyle={{color: 'gray'}}>ModifierFilm</NavLink>
            <NavLink exact to ="AddMovies" activeStyle={{color: 'gray'}}>AjouterFilm</NavLink>
        </div>
            
    
    );
};

/*Export Composant react Navbar(navigation/menu)*/
export default Navbar;