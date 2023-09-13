
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'
import * as fs from 'fs';


const Blogs = (props) => {
  console.log(props)
 const [blog , setBlog]=useState(props.myprops)
  // useEffect(()=>{
  //   console.log("useeffect is running")
  //   fetch("http://localhost:3000/api/blogs").then((a)=>{
  //     return a.json();})
  //   .then((parsed)=>{
  //     console.log(parsed)
  //   setBlog(parsed)
  //   })

  // },[])
  return (
   
    
    <div className={styles.container}>
    <div>
        <h1 className={styles.subheading}>
          New Blogs Post
        </h1>
      </div>
     <main className={styles.main}>
      {blog.map((blog1)=>{
          return <div key={blog1.slug} >
          <Link href={`/Blogpost/${blog1.slug}`}><a>
            <h2 className={styles.blog1}>{blog1.title}</h2> </a></Link>
              <p className={styles.para1}>{blog1.Data.substr(0,140)}...</p>
             </div>
        })}        
    </main>
    </div>
    
  )
}
export async function getstaticProps(context) {
  
  let data=await fs.promises.readdir("Blogdata")
  let myblog;
  let Allblogs=[];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myblog= await fs.promises.readFile(('blogdata/' + item),'utf-8')
    Allblogs.push(JSON.parse(myblog))
  }
      
  return {
   

    props: {myprops}, // will be passed to the page component as props
  }
}
// export async function getServerSideProps(context) {
//   let mydata = await  fetch("http://localhost:3000/api/blogs")
//   let myprops= await mydata.json()
      
//   return {
   

//     props: {myprops}, // will be passed to the page component as props
//   }
// }

export default Blogs
