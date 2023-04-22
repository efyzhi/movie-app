import React, { useState } from "react";
import styles from "/styles/SearchMovies.module.css";
import MovieCard from "./MovieCard";

const SearchMovies = ({ data }) => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(data);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=5a3cae9931be2c3de8c462e67d6b9331&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form className={styles.form} onSubmit={searchMovies}>
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
        {movies &&
          movies
            .filter((movie) => movie?.poster_path)
            .map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=5a3cae9931be2c3de8c462e67d6b9331&language=en-US&query=batman&page=1&include_adult=false`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return {
      props: {
        data: data.results,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        data: [],
      },
    };
  }
}

export default SearchMovies;
