import React from 'react'
import styles from "/styles/MovieCard.module.css";

const MovieCard = ({movie}) => {
  return (
    <div>
        <div className={styles.card}>
              <img 
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} 
              alt={movie.title + ' poster'} 
              className={styles.image}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.title}>{movie.title}</h3>
                <p><small>RELEASE DATE: {movie.release_date}</small> </p>
                <p><small>RATING: {movie.vote_average}</small> </p>
                <p className={styles.cardDesc}>{movie.overview}</p>
              </div>
            </div>
    </div>
  )
}

export default MovieCard