import styles from '../styles/Home.module.css'

import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Página principal</title>
        <meta name="keywords" content="Roupas, Calçados, Bonés"></meta>
        <meta
          name="description"
          content="Encontre a melhor roupa para você"
        ></meta>
      </Head>
      <h1 className={styles.title}>Hello World Next!</h1>
      <img src="/images/city.jpg" alt="A noite de uma cidade" />
    </>
  )
}
