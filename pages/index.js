import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tolulope's Blog</title>
        <meta name="description" content="Welcome to my blog!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my <a href="/">Blog!</a>
        </h1>

        <p className={styles.description}>
          Hello, I am Tolulope. I'm a Frontend Engineer and a technical writer.
          You can contact me on <a href="https://twitter.com/_thetolulope" className={styles.socialLinks} >Twitter</a>
        </p>

        <div className={styles.grid}>
          <a href="/posts/first-post" className={styles.card}>
            <h2>Differentiating Between Margin and Padding &rarr;</h2>
            <p>Discussing on what the differnce between margin and padding is...</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://tolulope-adedoyin.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLinks}
        >
          Tolulope Adedoyin
        </a>
      </footer>
    </div>
  )
}
