import { useState } from "react";

export default function Age() {

    const [dd,setDate] = useState();
    const [mm,setMonth] = useState();
    const [yy,setYear] = useState();
    const [cdd,setCDate] = useState("--");
    const [cmm,setCMonth] = useState("--");
    const [cyy,setCYear] = useState("--");

    const displays = [
        {
            res:cyy,
            text:"years",
        },
        {
            res:cmm,
            text:"months",
        },
        {
            res:cdd,
            text:"days",
        },
    ];

    const update = () => {
        const d=new Date();
        const date=d.getDate();
        const month=d.getMonth()+1;
        const year=d.getFullYear();
        if(yy>year || (dd>date && mm>date && yy==year) || mm>12 || dd>31){
            alert("Enter Valid D.O.B");
        }else{
            if(mm>=month){
                setCYear(year-yy-1);
                setCMonth(mm-month);
                setCDate((mm-month)*30);
            }else{
                setCYear(year-yy);
                setCMonth(12-(month-mm));
                setCDate((12-(month-mm))*30);
            }
            
        }
    };


    return(
        <div>
            <div className="flex justify-center py-[70px] text-3xl sm:text-5xl">
                <p className="text-red-500 font-bold">Age Calculator</p>
            </div>
            <div className="flex justify-center py-[20px]">
                <div className="bg-white hover:bg-gray-700 border rounded-xl border-gray-700 drop-shadow-5xl shadow-gray-300 h-[400px] w-[350px] sm:h-[450px] sm:w-[600px]">
                    <div className="py-6 px-7 sm:px-[50px] font-bold grid grid-cols-3 gap-4 sm:gap-[70px]">
                        <div>
                            <h1 className="text-gray-600">DAY</h1>
                            <div className="py-2">
                               <input type="number" placeholder="DD" className="p-2 px-5 w-[80px] sm:h-[50px] sm:w-[150px] border border-gray-400 rounded-md" onChange={(e) => {setDate(e.target.value)}} required></input>                                            
                            </div>                           
                        </div>
                        <div>
                            <h1 className="text-gray-600">MONTH</h1>
                            <div className="py-2">
                               <input type="number" placeholder="MM" className="p-2 px-5 w-[80px] sm:h-[50px] sm:w-[150px] border border-gray-400 rounded-md" onChange={(e) => {setMonth(e.target.value)}} required></input>                                            
                            </div>                           
                        </div>
                        <div>
                            <h1 className="text-gray-600">YEAR</h1>
                            <div className="py-2">
                               <input type="number" placeholder="YYYY" className="p-2 px-5 w-[80px] sm:h-[50px] sm:w-[150px] border border-gray-400 rounded-md" onChange={(e) => {setYear(e.target.value)}} required></input>                                            
                            </div>                           
                        </div>
                    </div>
                    <div className="flex justify-center">
                       <button onClick={update} className="bg-blue-500 p-1 sm:p-2 w-[100px] border border-gray-400 rounded-md hover:bg-orange-400">Check</button>
                    </div>
                    <div className="flex justify-center py-10 sm:py-8 text-2xl sm:text-4xl grid grid-cols gap-5 sm:gap-8">
                        {
                            displays.map((i) => {
                                return(
                                    <div>
                                        <h1><span className="text-blue-500">{i.res}</span> {i.text}</h1>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
