import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function Res() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const res = {
    res: "76",
    per: "65%",
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          background: {
            color: {
              value: "#0000",
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "image",
              image: {
                src: "https://i.ibb.co/9YwG0pb/balloon-png.png",
              }
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: 50,
            },
            links: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "bottom",
              straight: false,
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              }
            },
            number : {
              value: 50,
            }
          },
          interactivity: {
            detect_on: "canvas",
          },
          retina_detect: true,
        }}
      />
      <div className="grid grid-cols-1 gap-6 sm:gap-10">
        <div className="flex justify-center font-bold text-3xl bg-gradient-to-r from-red-700 to-purple-500 text-transparent bg-clip-text">
          Result Summary
        </div>
        <div className="bg-white border border-white shadow-2xl rounded-2xl h-[650px] w-[350px] sm:h-[500px] sm:w-[700px] grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1">
          <div className="bg-blue-400 border rounded-2xl grid grid-cols-1">
            <div className="flex justify-center py-4 sm:py-6 text-white font-bold text-lg sm:text-3xl">
              Your Result
            </div>
            <div className="flex justify-center">
              <div className="h-[130px] w-[130px] sm:h-[200px] sm:w-[200px] rounded-full bg-blue-500">
                <h1 className="flex justify-center mt-8 text-white font-extrabold text-5xl sm:text-8xl">
                  {res.res}
                </h1>
                <h1 className="flex justify-center mt-2 text-gray-300 sm:text-lg">
                  of 100
                </h1>
              </div>
            </div>
            <div className="flex justify-center grid grid-cols-1">
              <h1 className="flex justify-center font-semibold text-white text-md sm:text-2xl">
                Great
              </h1>
              <p className="px-4 text-center text-white text-base">
                You scored higher than {res.per} of the people who have taken
                these tests
              </p>
            </div>
          </div>
          <div className="grid grid-rows-6 gap-3 mt-2 px-4">
            <h1 className="text-xl text-purple-800 sm:mt-2 sm:text-3xl">
              Summary
            </h1>
            <p className="bg-red-200 w-[310px] rounded-lg flex items-center flex space-x-[120px]">
              <h1 className="px-6 text-red-500 font-semibold text-lg">
                Reaction
              </h1>
              <h1 className="text-gray-500">80 / 100</h1>
            </p>
            <p className="bg-orange-200 w-[310px] rounded-lg  flex items-center flex space-x-[120px]">
              <h1 className="px-6 text-orange-500 font-semibold text-lg">
                Memory
              </h1>
              <h1 className="text-gray-500">80 / 100</h1>
            </p>
            <p className="bg-green-200 w-[310px] rounded-lg  flex items-center flex space-x-[140px]">
              <h1 className="px-6 text-green-500 font-semibold text-lg">
                Verbal
              </h1>
              <h1 className="text-gray-500">80 / 100</h1>
            </p>
            <p className="bg-blue-200 w-[310px] rounded-lg  flex items-center flex space-x-[140px]">
              <h1 className="px-6 text-blue-500 font-semibold text-lg">
                Visual
              </h1>
              <h1 className="text-gray-500">80 / 100</h1>
            </p>
            <div className="flex justify-center mb-2">
              <button className="bg-purple-900 rounded-lg px-2 sm:h-[50px] sm:mt-2 w-[150px] text-white border border-white shadow-xl">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
