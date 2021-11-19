import Link from 'next/link'

import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre a empresa</title>
      </Head>
      <Link href="/">
        <a>Voltar</a>
      </Link>
      <h1>Página de About</h1>
    </>
  )
}
