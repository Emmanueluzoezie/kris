import Head from 'next/head'
import Menu from "../components/Menu"
import Main from "../components/Main"
import Footer from "../components/footer"
import FormLInk from "../components/formLink"
// import Skill from "../components/Skills"

export default function Home() {
  return (
    <div className="bg-gray-800 pb-5">
      <Head>
        <title>Jonuel portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <Main />
      <FormLInk />
      {/* <Skill /> */}
      <Footer />
    </div>
  )
}
