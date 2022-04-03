import "./App.css";
import { useEffect } from "react";
import Div100vh from "react-div-100vh";
import oracle from "./images/oracle.png";
import { FaTwitter } from "react-icons/fa";

function App() {
  const twitterLink = "https://twitter.com/theAncestorsNFT";

  const appHeight = () => {
    let doc = document.documentElement;
    doc.style.setProperty("—-app-height", `${window.innerHeight}px`);
  };

  useEffect(() => {
    window.addEventListener("resize", appHeight);
    appHeight();
  }, []);

  return (
    <Div100vh>
      <div className="mx-auto h-full flex flex-col sm:flex-row sm-full landscape:flex-row">
        <div className="flex flex-[1_1_33%] sm:flex-1 landscape:flex-1">
          <div className="flex flex-col mx-auto w-[90%] place-items-center justify-center md:mt-0">
            <div className="flex flex-col ">
              <p className="text-center text-white font-roboto text-xl md:text-2xl">
                The time has come for
              </p>
              <p className="text-center text-white font-roboto text-xl">
                the{" "}
                <span className="text-yellow-500 font-titillium font-bold text-3xl md:text-4xl">
                  ANCESTORS
                </span>{" "}
                to
              </p>
              <p className="text-center text-white font-roboto text-xl md:text-2xl">
                return to help mankind
              </p>
            </div>
            <div className="flex flex-col items-center mt-3 md:mt-0">
              <p className="text-center text-white font-roboto text-xl">
                Join the journey before it's too late!
              </p>
              <button className="bg-[#1da1f2] text-white lg:text-xl lg:py-3 lg:px-7 py-2 px-6 text-lg mt-4 rounded-full  hover:bg-blue-400 duration-500 focus:drop-shadow-xl items-center">
                <a href={twitterLink} target="_blank" rel="noreferrer">
                  <FaTwitter />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-[1_1_66%] w-full h-full sm:flex-1 landscape:flex-1 justify-center relative">
          <img
            className="h-[90%] object-fit absolute bottom-0"
            src={oracle}
            alt="Oracle Ancestor"
          />
        </div>
      </div>
    </Div100vh>
  );
}

export default App;
