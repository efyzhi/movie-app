import styles from '@/components/styles/Home.module.css'
import SearchMovies from '../src/components/SearchMovies'


export default function Home() {
  return (
    <>
        <div className={styles.container}>
          <h1 className={styles.title}> Movie Search</h1>
          <SearchMovies />
        </div>
    </>
  )
}
