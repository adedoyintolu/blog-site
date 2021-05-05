import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tolulope's Blog</title>
        <meta name="description" content="Differentiating Margin and Padding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.blogMain}>
        <h1 className={styles.blogTitle}>
          Differentiating Between Margin and Padding
        </h1>

        <p className={styles.blogDesc}>
          In today's topic, we will be discussing on what the difference between margin and padding is
        </p>


        <Link href="/">
          <a className={styles.backToHome}>Back to home</a>
        </Link>

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
