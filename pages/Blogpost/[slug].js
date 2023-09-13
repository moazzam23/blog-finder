import React, { useState ,  } from 'react'
import styles from '../../styles/Blogpost.module.css'


const slug = (props) => {
  
 
   const [blog, setBlog]=useState();
//    const router = useRouter();
//     useEffect(()=>{   
//  if(!router.isReady) return;
//   const {slug}= router.query;
//       fetch( `http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
//         return a.json();})
//       .then((parsed)=>{
       
//       setBlog(parsed)
//       })
  
//     },[router.isReady] )
 return <div className={styles.container}>
  <main className={styles.main}>

    <h1> {blog && blog.title}</h1>
    <hr/>
<div>{blog && blog.Data}

</div>
    </main>
    </div>;
}
export async function getStaticPaths(props) {
  return {
    paths: [

      {params :{slug: 'How to learn Javascript'}},
      {params :{slug: 'How to learn Next JS'}},
      {params :{slug: 'How to learn ReactJS'}},

    ],
    fallback: true, // can also be true or 'blocking'
  }
}

export async function getstaticProps(context) {
  const {slug}= context.params;
  let blog = await fs.promises.readFile( `blogdata/${slug}.json`,"utf-8")   
  return {
   

    props: { blog: JSON.parse(blog)}, // will be passed to the page component as props
    } 
   }
// export async function getstaticProps(context) {
//   const {slug}= context.query;
//   let data = await fetch( `http://localhost:3000/api/getblog?slug=${slug}`)   
//   let myblogs= await data.json()  
 
 
    
      
//   return {
   

//     props: {myblogs}, // will be passed to the page component as props
//   }
// export async function getServerSideProps(context) {
  //   const {slug}= context.query;
//   let data = await fetch( `http://localhost:3000/api/getblog?slug=${slug}`)   
//   let myblogs= await data.json()  
 
 
    
      
//   return {
   

//     props: {myblogs}, // will be passed to the page component as props
//   }
  
export default slug;
