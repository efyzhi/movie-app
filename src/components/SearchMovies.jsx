import React, { useState } from "react";
import styles from "/styles/SearchMovies.module.css";
import MovieCard from "./MovieCard";

const SearchMovies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const SearchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const url = `https://api.themoviedb.org/3/search/movie?api_key=5a3cae9931be2c3de8c462e67d6b9331&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      setMovies(data.results);
    } catch (error) {
      console.error(error);

      //const url = `https://api.themoviedb.org/3/movie/550?api_key=5a3cae9931be2c3de8c462e67d6b9331`;
    }
  };

  return (
    <div>
      <form className={styles.form} onSubmit={SearchMovies}>
        <label htmlFor="query" className={styles.label}>
          Movie Name
        </label>
        <input
          className={styles.input}
          type="text"
          name="query"
          placeholder="i.e. Black Adam"
          value={query}
          onChange={handleQuery}
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
      <div className={styles.cardList}>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default SearchMovies;
