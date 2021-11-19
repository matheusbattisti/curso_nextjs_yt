import Navbar from './Navbar'
import Footer from './Footer'

export default function Contact({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  )
}
