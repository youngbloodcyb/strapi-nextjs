import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Blog from '../components/Blog';
import Nav from '../components/Nav';
import Social from '../components/Social';
import Hero from '../components/Hero';

const URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export async function getStaticProps(context) {
  const fetchParams = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      query: `{
      posts {
        data {
          attributes {
            title
            body
            description
            slug
            publishedAt
          }
        }
      }
    }`
    })
  }

  const res = await fetch(`${URL}/graphql`, fetchParams);
  const data = await res.json();

  return {
    props: data,
    revalidate: 30
  };
}

export default function Home({ data }) {
  const posts = data.posts.data;
  
  return (
    <div className="mx-12 md:mx-24">
      <Head>
        <title>Pen & Paper</title>
        <meta name="description" content="Pen and Paper: Articles about Everything" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <main className="flex flex-col items-center">
        <Hero/>
        <h1 className="text-6xl font-bold lowercase lg:w-2/3 md:w-3/4 w-full mb-10">
          Top Articles
        </h1>

        <div className="flex flex-col gap-4 items-center justify-center lg:w-2/3 md:w-3/4 w-full">
          {posts.map((post, index) => {
            const { title, description, slug, publishedAt } = post.attributes;
            return (
              <Blog key={index} title={title} description={description} slug={slug} publishedAt={publishedAt}/> 
            )
          })}
        </div>
      </main>
      <footer className="my-6">
        <Social/>
      </footer>
    </div>
  )
}
