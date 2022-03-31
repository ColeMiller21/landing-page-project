import "./App.css";
import oracle from "./images/oracle.png";
import { FaTwitter } from "react-icons/fa";

function App() {
  const twitterLink = "https://twitter.com/theAncestorsNFT";
  return (
    <div className="bg-cover main-background">
      <div className="flex lg:flex-row flex-col">
        <div className="lg:basis-1/2 basis-1/3 pt-10 lg:pt-0 flex flex-col justify-center lg:h-screen place-items-center w-[90%]">
          <div className="text-center flex-col flex z-10">
            <p className="font-roboto lg:text-4xl md:text-2xl sm:text-xl text-white font-bold leading-9">
              The time has come for
            </p>
            <p className="font-roboto lg:text-4xl md:text-2xl sm:text-xl text-white font-bold leading-9">
              the{" "}
              <span className="font-titillium text-yellow-500 lg:text-7xl text-4xl">
                ANCESTORS
              </span>{" "}
              to
            </p>
            <p className="font-roboto lg:text-4xl md:text-2xl sm:text-xl text-white font-bold leading-9">
              return to help mankind
            </p>
          </div>
          <div className="lg:py-6 flex flex-col place-items-center z-10">
            <p className="font-roboto lg:text-4xl md:text-2xl sm:text-xl text-white font-bold leading-9 text-center">
              Join the journey before it's too late!
            </p>
            <button className="bg-[#1da1f2] text-white font-roboto lg:text-xl lg:py-3 lg:px-7 py-2 px-6 text-lg mt-4 rounded-full lg:ml-8 hover:bg-blue-400 duration-500 focus:drop-shadow-xl ">
              <a href={twitterLink} target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </button>
          </div>
        </div>
        <div className="lg:basis-1/2 basis-2/3 flex justify-center lg:h-screen lg:relative">
          <img
            className="bottom-0 absolute h-[60%] lg:h-[90%]"
            src={oracle}
            alt="Ancestor Oracle"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
