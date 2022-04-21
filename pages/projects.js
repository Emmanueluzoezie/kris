import Head from 'next/head'
import Menu from "../components/Menu"
import Footer from "../components/footer"
// import logo from "../public/logo.jpeg"
import Image from "next/Image"

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
      {/* <div className=" grid place-items-center ">
                <div className=" rounded-full hover:ring-[5px] w-52 h-22 hover:w-64 hover:h-64 lg:hover:w-96 lg:hover:h-96 lg:w-80 lg:h-80 md:w-60 md:h-60 md:hover:w-72 md:hover:h-72">
                    <Image
                        className=" animate-pulse rounded-full w-full object-cover"
                        src={logo}
                        alt="Emmanuel uzoezie"
                     />
                </div>
                </div> */}
      </div>
      <Footer />
      
    </div>
  )
}

export default about;