import Head from 'next/head'
import Menu from "../components/Menu"
import Footer from "../components/footer"
import ContactForm from "../components/form"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export default function Home() {
  return (
    <div className="bg-gray-800 h-screen">
      <Head>
        <title>Jonuel portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      
      <div className="grid place-items-center mt-14 mb-4 px-14 md:px-0">
      <h1 className="text-center font-bold text-2xl text-white mb-8">send your message</h1>
      <div className="md:w-4/6 mb-2">
      <ContactForm />
      </div>
      </div>
      <div className="w-full absolute bottom-0">
          <h1 className="text-center font-bold text-2xl text-white">social media</h1>
          <Footer />
      </div>
    </div>
  )
}