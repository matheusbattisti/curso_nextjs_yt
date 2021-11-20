import styles from '../styles/About.module.css'

import Image from 'next/image'

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>PokeNext é um App construído em Next.js para consultar Pokémons.</p>
      <Image
        src="/images/charizard.png"
        alt="Charizard"
        width="300"
        height="300"
      />
    </div>
  )
}
