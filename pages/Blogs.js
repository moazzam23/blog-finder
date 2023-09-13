import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Blog.module.css';
import * as fs from 'fs';

const Blogs = (props) => {
  const [blogs, setBlogs] = useState(props.blogs);

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.subheading}>New Blogs Post</h1>
      </div>
      <main className={styles.main}>
        {blogs.map((blog1) => (
          <div key={blog1.slug}>
            <Link href={`/Blogpost/${blog1.slug}`}>
              <a>
                <h2 className={styles.blog1}>{blog1.title}</h2>
              </a>
            </Link>
            <p className={styles.para1}>{blog1.Data.substr(0, 140)}...</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("Blogdata");
  let myblog;
  let blogs = [];
  
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myblog = await fs.promises.readFile(('blogdata/' + item), 'utf-8');
    blogs.push(JSON.parse(myblog));
  }
  
  return {
    props: { blogs },
  };
}

export default Blogs;
