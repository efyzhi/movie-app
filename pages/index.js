import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/components/styles/Home.module.css'
import SearchMovies from '../src/components/SearchMovies'
// import styles from '@e/components/styles/global.css'


export default function Home() {
  return (
    <>
        <div className={styles.container}>
          <h1 className={styles.title}> Movie Seearch</h1>
          <SearchMovies />
        </div>
    </>
  )
}
