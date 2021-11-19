import Navbar from './Navbar'
import Footer from './Footer'

import styles from '../styles/MainContainer.module.css'

export default function Contact({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  )
}
