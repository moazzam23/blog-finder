import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function Navbar() {
  return (
    <>
<nav className={styles.MainNavbar}>
 <ul>
    <Link href="/"><a><li>Home</li></a></Link>
        <Link href="/Blogs"><a><li>Blogs </li></a></Link> 
    <Link href="/About"><a><li>About Us </li></a></Link> 
    <Link href="/Contact"><a><li>Contact </li> </a></Link> 
    
 </ul>

</nav>
    </>
  )
}
