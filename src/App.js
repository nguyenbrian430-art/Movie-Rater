import {useState} from "react";
import "./App.css";
import MovieList from "./components/movie-list";
import MovieDetail from "./components/movie-details";
import MovieForm from "./components/movie-forms";

function App() {


  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null);

  const movieClicked = (movie, isEdit) =>{
    if(isEdit){
      setSelectedMovie(null);
      setEditedMovie(movie);
    }
    else{
      setSelectedMovie(movie);
      setEditedMovie(null);
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="sideHeaders">
          <MovieList movieClicked={movieClicked} editMovie={setEditedMovie}/>
          <div className="details">
            <MovieDetail movie={selectedMovie} updateMovie={setSelectedMovie}/>
            {editedMovie && <MovieForm movie={editedMovie}/>}
          </div>
      </div>
    </div>
  );
}

export default App;
