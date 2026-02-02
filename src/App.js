import {useState} from "react";
import "./App.css";
import MovieList from "./components/movie-list";
import MovieDetail from "./components/movie-details";

function App() {


  const [selectedMovie, setSelectedMovie] = useState(null);

  const movieClicked = movie =>{
    setSelectedMovie(movie);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="sideHeaders">
          <MovieList movieClicked={movieClicked}/>
          <div className="details">
            <MovieDetail movie={selectedMovie}/>
          </div>
      </div>
    </div>
  );
}

export default App;
