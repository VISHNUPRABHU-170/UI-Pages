import { Link } from "react-router-dom";
import Particlesjs from "./Components/particles";

function App() {
  const datas = [
    {
      Name: "Age Calculator",
      image: "https://i.ibb.co/vsP12Qk/Age-calc.png",
      link: "/age-calc",
    },
    {
      Name: "Result Summary",
      image: "https://i.ibb.co/FxcrdrM/Res-sum.png",
      link: "/res-sum",
    },
    {
      Name: "Personal Info",
      image: "https://i.ibb.co/f4Nb6Mk/pers-info.png",
      link: "/pers-info",
    },
    {
      Name: "News Page",
      image: "https://i.ibb.co/CwHKVps/News-page.png",
      link: "/news-pge",
    },
  ];

  return (
    <div>
      <Particlesjs></Particlesjs>
      <div className="flex justify-center text-white py-[70px] text-2xl sm:text-5xl">
        <p className="text-white shadow-xl">Hii! Welcome to My UI-Designs</p>
      </div>
      <div className="px-[50px] sm:py-10 sm:px-[150px] grid grid-row gap-10 sm:grid-cols-2 sm:gap-x-[100px] sm:gap-y-[70px]">
        {datas.map((i) => {
          return (
            <div key={i.link}>
              <h3 className="text-1xl sm:text-3xl flex justify-center text-white">
                {i.Name}
              </h3>
              <Link to={i.link}>
                <img
                  src={i.image}
                  alt="img"
                  className="border-2 rounded-lg h-[320px] w-[500px] sm:h-[450px] sm:w-[550px] mt-5 hover:border-slate-800"
                ></img>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
