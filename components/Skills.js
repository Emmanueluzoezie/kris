import Image from "next/image"
// import react from "../public/react.png";
import css from "../public/css.png";
import html from "../public/html.png";
import bootstrap from "../public/bootstrap.png";
import next from "../public/next.png";
import tailwind from "../public/tailwind.png";
import react from "../public/react.png";
import javascript from "../public/javascript.png";
import firebase from "../public/firebase.png";

function Skill (){
    return(
        <div className="mb-10">
            <h1 className="text-center font-bold text-white text-2xl">Tools i use</h1>
            <div className="flex justify-center items-center flex-wrap">
            <div className=" hover:transform hover:ease-in-out bg-red-300 hover:duration-700 w-24 h-24 hover:w-28 hover:h-28 ring-[5px] m-5" >
                <Image
                    className="bg-red-300"
                    src={html}
                    alt="technolgy"
                    />
            </div>
            <div className=" hover:transform hover:ease-in-out bg-red-300 hover:duration-700 w-24 h-24 hover:w-28 hover:h-28 ring-[5px] m-5" >
                <Image
                    className="bg-red-300"
                    src={css}
                    alt="technolgy"
                    />
            </div>
            <div className=" hover:transform hover:ease-in-out bg-red-300 hover:duration-700 w-24 h-24 hover:w-28 hover:h-28 ring-[5px] m-5" >
                <Image
                    className="bg-red-300"
                    src={bootstrap}
                    alt="technolgy"
                    />
            </div>
            <div className=" hover:transform hover:ease-in-out bg-red-300 hover:duration-700 w-24 h-24 hover:w-28 hover:h-28 ring-[5px] m-5" >
                <Image
                    className="bg-red-300"
                    src={next}
                    alt="technolgy"
                    />
            </div>
            <div className=" hover:transform hover:ease-in-out bg-red-300 hover:duration-700 w-24 h-24 hover:w-28 hover:h-28 ring-[5px] m-5" >
                <Image
                    className="bg-red-300"
                    src={tailwind}
                    alt="technolgy"
                    />
            </div>
            <div className=" hover:transform hover:ease-in-out bg-red-300 hover:duration-700 w-24 h-24 hover:w-28 hover:h-28 ring-[5px] m-5 relative" >
                <Image
                    className="bg-red-300"
                    src={firebase}
                    alt="technolgy"
                    />
            </div>
            <div className=" hover:transform hover:ease-in-out bg-red-300 hover:duration-700 w-24 h-24 hover:w-28 hover:h-28 ring-[5px] m-5 relative" >
                <Image
                    className="bg-red-300"
                    src={react}
                    alt="technolgy"
                    />
            </div>
            <div className=" hover:transform hover:ease-in-out bg-red-300 hover:duration-700 w-24 h-24 hover:w-28 hover:h-28 ring-[5px] m-5 relative" >
                <Image
                    className="bg-red-300"
                    src={javascript}
                    alt="technolgy"
                    />
            </div>

            </div>
        </div>
    )
}

export default Skill

