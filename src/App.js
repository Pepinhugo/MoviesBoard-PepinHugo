/*Page de L'application*/
/*Import des fonctionalités de "React"*/
import React from "react";

/*Import d'un router sur l'application afin de pouvoir naviguer d'une page à l'autre*/
import { BrowserRouter as Router, Route } from 'react-router-dom';

/*Import du CSS Général de l'application*/
import './App.css';

/*Import des différentes pages de l'application */
import Home from './views/Home';
import DetailsMovies from './views/DetailsMovies';
import NewsMovies from './views/ChangeMovies';
import AddMovies from './views/AddMovies';

/*Import de la Navbar(navigation/menu) de l'application*/
import Navbar from './components/Navbar'

/*Fonction de L'application qui renvoie l'ensemble général de la scructure du site*/
function App() {
  
  /*Le retour en HTML de l'application ansi que son router */
  return (
    <div className="App">
      <header className="App-header">
      
    
    <Router>

      <Navbar/>
    
      <Route path='/' exact ><Home/></Route>
      <Route path='/DetailsMovies/:id'><DetailsMovies/></Route>
      <Route path='/ChangeMovies'><NewsMovies/></Route>
      <Route path='/AddMovies'><AddMovies/></Route>

    </Router>

      </header>
    </div>
  );
}

/*Export de la fonction de la page App*/
export default App;
