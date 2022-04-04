import "./App.css";
import { useEffect } from "react";
import Div100vh from "react-div-100vh";
import oracle from "./images/oracle.png";
import { FaTwitter } from "react-icons/fa";

function App() {
  const twitterLink = "https://twitter.com/theAncestorsNFT";
  let canvasWidth = 1600;
  let canvasHeight = 200;
  let pCount = 0;
  let pCollection = new Array();
  let puffs = 1;
  let particlesPerPuff = 2000;
  let img = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/85280/smoke2.png";
  let smokeImage = new Image();
  smokeImage.src = img;

  for (var i1 = 0; i1 < puffs; i1++) {
    var puffDelay = i1 * 1500; //300 ms between puffs

    for (var i2 = 0; i2 < particlesPerPuff; i2++) {
      addNewParticle(i2 * 50 + puffDelay);
    }
  }

  function addNewParticle(delay) {
    var p = {};
    p.top = canvasHeight;
    p.left = randBetween(-200, 800);

    p.start = new Date().getTime() + delay;
    p.life = 8000;
    p.speedUp = 30;

    p.speedRight = randBetween(0, 20);

    p.rot = randBetween(-1, 1);
    p.red = Math.floor(randBetween(0, 255));
    p.blue = Math.floor(randBetween(0, 255));
    p.green = Math.floor(randBetween(0, 255));

    p.startOpacity = 0.3;
    p.newTop = p.top;
    p.newLeft = p.left;
    p.size = 200;
    p.growth = 10;

    pCollection[pCount] = p;
    pCount++;
  }

  function draw(startT, totalT) {
    //Timing
    var timeDelta = new Date().getTime() - startT;
    var stillAlive = false;

    //Grab and clear the canvas
    var c = document.getElementById("smokeCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    c.width = c.width;

    //Loop through particles
    for (var i = 0; i < pCount; i++) {
      //Grab the particle
      var p = pCollection[i];

      //Timing
      var td = new Date().getTime() - p.start;
      var frac = td / p.life;

      if (td > 0) {
        if (td <= p.life) {
          stillAlive = true;
        }

        //attributes that change over time
        var newTop = p.top - p.speedUp * (td / 1000);
        var newLeft = p.left + p.speedRight * (td / 1000);
        var newOpacity = Math.max(p.startOpacity * (1 - frac), 0);

        var newSize = p.size + p.growth * (td / 1000);
        p.newTop = newTop;
        p.newLeft = newLeft;

        //Draw!
        ctx.fillStyle = "rgba(150,150,150," + newOpacity + ")";
        ctx.globalAlpha = newOpacity;
        ctx.drawImage(smokeImage, newLeft, newTop, newSize, newSize);
      }
    }

    //Repeat if there's still a living particle
    if (stillAlive) {
      requestAnimationFrame(function () {
        draw(startT, totalT);
      });
    } else {
      clog(timeDelta + ": stopped");
    }
  }

  function randBetween(n1, n2) {
    var r = Math.random() * (n2 - n1) + n1;
    return r;
  }

  function randOffset(n, variance) {
    //e.g. variance could be 0.1 to go between 0.9 and 1.1
    var max = 1 + variance;
    var min = 1 - variance;
    var r = Math.random() * (max - min) + min;
    return n * r;
  }

  function clog(s) {
    console.log(s);
  }

  const appHeight = () => {
    let doc = document.documentElement;
    doc.style.setProperty("—-app-height", `${window.innerHeight}px`);
  };

  useEffect(() => {
    console.clear();
    draw(new Date().getTime(), 3000);
    window.addEventListener("resize", appHeight);
    appHeight();
  }, []);

  return (
    <Div100vh>
      <div className="mx-auto h-full flex flex-col sm:flex-row sm-full landscape:flex-row relative">
        <canvas
          id="smokeCanvas"
          className="bg-transparent h-[175px] w-full z-10 absolute bottom-0"
        ></canvas>
        <div className="flex flex-[1_1_33%] sm:flex-1 landscape:flex-1">
          <div className="flex flex-col mx-auto w-[90%] place-items-center justify-center md:mt-0">
            <div className="flex flex-col ">
              <p className="text-center text-white font-roboto text-xl md:text-2xl">
                The time has come for
              </p>
              <p className="text-yellow-500 font-titillium font-bold text-4xl md:text-4xl">
                THE ANCESTORS
              </p>
              <p className="text-center text-white font-roboto text-xl md:text-2xl">
                to return to help mankind
              </p>
            </div>
            <div className="flex flex-col items-center mt-3 md:mt-0">
              <p className="text-center text-white font-roboto text-lg sm:text-xl">
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
