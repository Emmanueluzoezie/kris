import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

const Footer = () => {
  return (
    <div className="mb-4 text-center">
      <div className="flex justify-center space-x-8 m-3">
        <a href=""><InstagramIcon className="cursor-pointer lg:text-4xl"/></a>
        <a href="https://twitter.com/Emmy_uzoezie"><TwitterIcon className="cursor-pointer lg:text-4xl"/></a>
        <a href="" ><LinkedInIcon className="cursor-pointer lg:text-4xl"/></a>
    </div>
    <h3 className="text-center font-bold text-white mt-7 mx-auto mb-0 flex justify-center items-center"><p className="rounded-full border-2 border-white w-5 h-5 flex items-center justify-center mr-2">c</p> 2022 Jonuel dev</h3>
    </div>
  )
}

export default Footer