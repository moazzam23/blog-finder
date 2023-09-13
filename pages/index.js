import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CODING HUB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
      </Head>
      
   

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome To Coding Hub 
        </h1>
        
        <p className={styles.description}>
          Find new ways of learning with Coding Hub 
          <code className={styles.code}></code>
        </p>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
