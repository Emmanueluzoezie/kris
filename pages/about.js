import Head from 'next/head'
import Menu from "../components/Menu"
import About from "../components/about"
import Footer from "../components/footer"
// import Skill from "../components/Skills"

const about = () => {
  return (
    <div className="bg-gray-800 text-white" >
      <Head>
        <title>About</title>
        <meta name="description" content="Jonuel portfolio About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <About />
      {/* <Skill /> */}
      <Footer />
      
    </div>
  )
}

export default about