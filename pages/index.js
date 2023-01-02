import Head from "next/head";
import Table from "../components/Table";
import styles from "../styles/Home.module.css";

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const pokemons = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      pokemons,
    },
  };
}
export default function Home({ pokemons }) {
  return (
    <>
      <Head>
        <title>PokeApi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pokeapi_icon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <img
              src="/pokeapi.svg"
              alt="Pokemon"
              className={styles.vercelLogo}
              width={150}
              height={80}
              priority
            />
          </div>
        </div>
        <Table pokemons={pokemons} />
      </main>
    </>
  );
}
