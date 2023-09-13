import React, { useEffect, useState } from 'react';
import styles from '../../styles/Blogpost.module.css';
import { useRouter } from 'next/router';

const BlogPost = ({ blog }) => {
  const router = useRouter();
  const [currentBlog, setCurrentBlog] = useState(blog);

  useEffect(() => {
    if (!router.isReady) return;

    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/getblog?slug=${router.query.slug}`);
        const data = await response.json();
        setCurrentBlog(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlog();
  }, [router.isReady]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{currentBlog && currentBlog.title}</h1>
        <hr />
        <div>{currentBlog && currentBlog.Data}</div>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'How to learn Javascript' } },
      { params: { slug: 'How to learn Next JS' } },
      { params: { slug: 'How to learn ReactJS' } },
    ],
    fallback: true, // Set to 'true' or 'blocking'
  };
}

export async function getStaticProps(context) {
  try {
  const { slug } = context.params;
  let blog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8');
  const data = await fetchData();
  return {
    props: {data },
  };}catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { data: [] }, // Handle the error gracefully
    };
  }

}

export default BlogPost;
