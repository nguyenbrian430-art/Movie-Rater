import {useState, useEffect} from "react";
import "./App.css";
import MovieList from "./components/movie-list";
import MovieDetail from "./components/movie-details";
import MovieForm from "./components/movie-forms";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function App() {


  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null);
  const [updatedMovie, setUpdatedMovie] = useState(null);
  const [newMovie, setNewMovie] = useState(null);
  const [token] = useCookies("mr-token");
  const navigate = useNavigate();

  useEffect(()=>{
    if(!token["mr-token"]) navigate('/');
  },[token])


  
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

  const createNewMovie = () =>{
    setSelectedMovie(null);
    setEditedMovie({title:"", description: ""})
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="sideHeaders">
        <div>
        <MovieList movieClicked={movieClicked} editMovie={setEditedMovie} newMovie={newMovie} updatedMovie={updatedMovie}/>
        <button onClick={() => createNewMovie()}>Create New Movie</button>
        </div>
        <div className="details">
          <MovieDetail movie={selectedMovie} updateMovie={setSelectedMovie}/>
          {editedMovie && <MovieForm movie={editedMovie} updatedMovie={setUpdatedMovie} addNewMovie={setNewMovie}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
