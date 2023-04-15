import { Link } from "react-router-dom";

function App(){

  const datas = [
    {
      Name:"Age Calculator",
      image:"https://i.ibb.co/vsP12Qk/Age-calc.png",
      link:"/age-calc",
    },
    {
      Name:"Result Summary",
      image:"https://i.ibb.co/FxcrdrM/Res-sum.png",
      link:"/res-sum",
    },
  ];

  return(
    <div className="bg-black">
      <div className="flex justify-center text-white py-[70px] text-2xl sm:text-5xl">
        <p className="drop-shadow-5xl shadow-white">Hii! Welcome to My UI-Designs</p>
      </div>
      <div className="px-[50px] sm:py-10 sm:px-[150px] grid grid-row gap-10 sm:grid-cols-2 sm:gap-x-[100px] sm:gap-y-[70px]">
        {datas.map((i) => {
          return(
            <div key={i.link}>
              <h3 className="text-1xl sm:text-3xl flex justify-center text-white">{i.Name}</h3>
              <Link to={i.link}>
                <img src={i.image} alt="img" className="border-2 rounded-lg drop-shadow-5xl h-[320px] w-[500px] sm:h-[450px] sm:w-[550px] mt-5 hover:border-slate-800"></img>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
