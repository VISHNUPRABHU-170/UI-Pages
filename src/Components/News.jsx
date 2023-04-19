import { useState } from "react";

function News() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="flex items-center bg-white justify-center h-screen">
        <div className="h-full w-[330px] mt-[80px] sm:mb-[80px] sm:h-[650px] sm:w-[1300px]">
          <div className="grid grid-cols-1">
            <div className="grid grid-cols-2">
              <h1 className="font-bold text-5xl">W.</h1>
              <div className="hidden sm:block sm:flex sm:justify-end sm:space-x-14">
                <button className="p-2 hover:bg-black hover:text-white">
                  Home
                </button>
                <button className="p-2 hover:bg-black hover:text-white">
                  New
                </button>
                <button className="p-2 hover:bg-black hover:text-white">
                  Popular
                </button>
                <button className="p-2 hover:bg-black hover:text-white">
                  Trending
                </button>
                <button className="p-2 hover:bg-black hover:text-white">
                  Categories
                </button>
              </div>
              <div className="flex justify-end sm:hidden">
                <button
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  <img
                    src="https://i.ibb.co/4TCYkBk/nav-bar.png"
                    alt="nav-bar"
                    className="w-[50px]"
                  />
                </button>
              </div>
              <div className="sm:hidden">{show && <Card />}</div>
            </div>
          </div>
          <div className="mt-10 sm:flex sm:space-x-[200px]">
            <div className="grid sm:grid-cols-1">
              <div className="sm:w-[880px]">
                <img
                  src="https://i.ibb.co/qRBMdfD/News-img.png"
                  alt="news-img"
                  className="w-full sm:w-full h-[300px] sm:h-[380px]"
                />
              </div>
              <div className="mt-10 grid grid-cols-1 gap-4 sm:w-[700px] sm:grid-cols-2 sm:gap-10">
                <div>
                  <h1 className="text-5xl font-extrabold">
                    The Bright Future of Web 3.0?
                  </h1>
                </div>
                <div className="sm:ml-10">
                  <p>
                    We dive into the next evolution of the web that claims to
                    put the power of the platform back into the hands of the
                    people. But is it really fulfilling its promise?
                  </p>
                  <div>
                    <button className="mt-4 p-2 px-6 font-semibold text-white tracking-widest bg-orange-600">
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 sm:mt-0 grid grid-cols-1 px-2 text-center w-full sm:w-[450px] h-full sm:h-full bg-gradient-to-r from-black to-purple-900">
              <div className="flex justify-center grid grid-rows-2">
                <h1 className="mt-4 grid grid-cols-1 text-3xl font-bold text-orange-600">
                  New
                </h1>
                <div className="mt-[-5px] border border-orange-500 h-0 w-15"></div>
              </div>
              <div className="mt-[-50px] ml-4 mr-4 grid grid-cols-1 text-white">
                <div>
                  <h1 className="mt-10 py-2 font-bold">
                    Hydrogen VS Electric Cars
                  </h1>
                  <div>
                    <p className="mt-4 text-sm">
                      Will hydrogen-fueled cars ever catch up to EVs?
                    </p>
                    <div className="mt-12 border w-[300px] sm:w-[350px] border-gray-500 h-0"></div>
                  </div>
                </div>
                <div>
                  <h1 className="mt-10 py-2 font-bold">
                    The Downsides of AI Artistry
                  </h1>
                  <div>
                    <p className="mt-4 text-sm">
                      What are the possible adverse effects of on-demand AI
                      image generation?
                    </p>
                    <div className="mt-12 border w-[300px] sm:w-[350px] border-gray-500 h-0"></div>
                  </div>
                </div>
                <div>
                  <h1 className="mt-10 py-2 font-bold">
                    Is VC Funding Drying Up?
                  </h1>
                  <p className="mt-4 mb-10 text-sm">
                    Private funding by VC firms is down 50% YOY, We take a look
                    at what that means.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 mb-5 grid grid-cols-1 gap-4 sm:grid sm:grid-cols-3">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://i.ibb.co/m5WscXM/news-1.png"
                  alt="img"
                  className="w-[190px] h-[130px]"
                />
              </div>
              <div className="grid grid-cols-1">
                <h1 className="text-2xl font-bold text-gray-500">01</h1>
                <h2 className="font-bold">Reviving Retro PCs</h2>
                <h3 className="text-gray-700">
                  What happens when old PCs are given modern upgrades?
                </h3>
              </div>
            </div>
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://i.ibb.co/vYCTF0x/news-2.png"
                  alt="img"
                  className="w-[150px] h-[130px]"
                />
              </div>
              <div className="grid grid-cols-1">
                <h1 className="text-2xl font-bold text-gray-500">02</h1>
                <h2 className="font-bold">Top 10 Laptops of 2022</h2>
                <h3 className="text-gray-700">
                  Our best picks for various needs and budgets.
                </h3>
              </div>
            </div>
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://i.ibb.co/MGp8RZG/news-3.png"
                  alt="img"
                  className="w-[170px] h-[130px]"
                />
              </div>
              <div className="grid grid-cols-1">
                <h1 className="text-2xl font-bold text-gray-500">03</h1>
                <h2 className="font-bold">The Growth of Gaming</h2>
                <h3 className="text-gray-700">
                  How the pandemic has sparked fresh opportunities.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="ml-[180px]">
      <div className="w-[150px] h-[210px] bg-black rounded-lg border border-white">
        <div className="grid grid-cols-1 gap-0 text-center text-bold text-white">
          <div className="w-full hover:bg-white hover:text-black">
            <h1 className="mt-3">Home</h1>
            <hr className="mt-2"></hr>
          </div>
          <div className="w-full hover:bg-white hover:text-black">
            <h1 className="mt-2">New</h1>
            <hr className="mt-2"></hr>
          </div>
          <div className="w-full hover:bg-white hover:text-black">
            <h1 className="mt-2">Popular</h1>
            <hr className="mt-2"></hr>
          </div>
          <div className="w-full hover:bg-white hover:text-black">
            <h1 className="mt-2">Trending</h1>
            <hr className="mt-2"></hr>
          </div>
          <div className="w-full hover:bg-white hover:text-black">
            <h1 className="mt-2">Categories</h1>
            <hr className="mt-2"></hr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
