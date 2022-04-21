import Head from 'next/head'
import Menu from "../components/Menu"
import Footer from "../components/footer"

const about = () => {
  return (
    <div className="bg-gray-800 h-full pb-4" >
      <Head>
        <title>About</title>
        <meta name="description" content="Jonuel portfolio About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <div className="grid place-items-center h-screen ">
      <h1 className="text-center font-bold text-2xl text-white">this page is still in process</h1>
      </div>
      <Footer />
      
    </div>
  )
}

export default about;