import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/home';
import MovieList from './components/MovieList/movieList';
import Movie from './pages/movieDetail/movie';
import Header from "./components/Header/header";

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
            <Routes>
                <Route index element={<Home/>}></Route>
                <Route path="movie/:id" element={<Movie/>}></Route>
                <Route path="movies/:type" element={<MovieList/>}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;