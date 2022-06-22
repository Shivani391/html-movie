
import './App.css';
import {Alert, Container} from "react-bootstrap";
import SearchForm from './components/SearchForm';
import CustomCard from './components/CustomCard';
import MovieList from './components/MovieList';
import { fetchMovieinfo } from './helpers/axiosHelper';
import {useState} from "react"



function App() {
  const [movie,setMovie]=useState({});
  const [showError, setShowError] = useState("");
  const[movieList, setMovieList] = useState([])

  const handleOnSubmit = async (str) =>{
    const result = await fetchMovieinfo(str);
   
    if (result.Response === "True" ){
      setMovie(result);
      setShowError("");
    
  }else{
    setMovie({});
    setShowError(result.Error);
  }
    
  };

  const movieSelect = (movie) => {
  
    setMovieList ([...movieList, movie ])
    setMovie({});
  }
  const deleteMovie = (imdbID) =>{
    if (window.confirm ("Are you sure you want to delete?")){

    const filteredArg = movieList.filter ((item) => item.imdbID !== imdbID)
    setMovieList(filteredArg);
  }};

  return (

   <div className= "wrapper">
    <Container>
      
        <SearchForm handleOnSubmit={handleOnSubmit}/>
          <div className="mt-4 d-flex justify-content-center">
            <div>
              {movie.imdbID && <CustomCard movie ={movie} func = {movieSelect} inSearchForm = {true}/>}
          {showError && <Alert varient ="danger"> {showError}
        
          </Alert>}
              

            </div>
           

          </div>
          <hr/>
          <MovieList movieList= {movieList}  deleteMovie= {deleteMovie}/>

    </Container>
 
    </div>
  );
  
}

export default App;
