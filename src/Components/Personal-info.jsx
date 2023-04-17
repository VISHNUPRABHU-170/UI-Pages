import { useState } from "react";
import ParticlesColorjs from "../particlejs-colors";

function Info() {
  const [YI, setYI] = useState(true);
  const [SP, setSP] = useState(false);
  const [AO, setAO] = useState(false);
  const [S, setS] = useState(false);
  const [P,setP] = useState(false);
  const [BC,setBC] = useState(true);

  return (
    <div className={`${BC ? 'bg-blue-200 flex items-center justify-center h-screen overflow-hidden' : 'flex items-center justify-center h-screen overflow-hidden'}`}>
      {P && <ParticlesColorjs/>}
      <div className="bg-white border border-white shadow-lg rounded-md h-[600px] w-[350px] sm:h-[600px] sm:w-[900px]">
        <div className="grid grid-rows-2 sm:grid-cols-2">
          <div className="py-10 items-center px-14  sm:px-6 sm:mt-6 sm:ml-4 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-violet-900 h-[200px] sm:h-[550px] sm:w-[300px] grid grid-cols-4 sm:grid-cols-1 gap-2 sm:gap-[-150px]">
            <div className="mt-[-50px] flex space-x-5">
              <button
                onClick={() => {
                  setYI(true);
                  setSP(false);
                  setAO(false);
                  setS(false);
                  setP(false);
                  setBC(true);
                }}
                className="border rounded-full w-10 h-10 hover:bg-blue-200 focus:bg-blue-200"
              >
                1
              </button>
              <div className="hidden sm:block sm:mt-[-5px]">
                <h1 className="text-gray-400 font-bold">STEP 1</h1>
                <h1 className="font-bold text-white">YOUR INFO</h1>
              </div>
            </div>
            <div className="mt-[-50px] flex space-x-5">
              <button
                onClick={() => {
                  setSP(true);
                  setAO(false);
                  setS(false);
                  setYI(false);
                  setP(false);
                  setBC(true);
                }}
                className="border rounded-full w-10 h-10 hover:bg-blue-200 focus:bg-blue-200"
              >
                2
              </button>
              <div className="hidden sm:block sm:mt-[-5px]">
                <h1 className="text-gray-400 font-bold">STEP 2</h1>
                <h1 className="font-bold text-white">SELECT PLAN</h1>
              </div>
            </div>
            <div className="mt-[-50px] flex space-x-5">
              <button
                onClick={() => {
                  setSP(false);
                  setAO(true);
                  setS(false);
                  setYI(false);
                  setP(false);
                  setBC(true);
                }}
                className="border rounded-full w-10 h-10 hover:bg-blue-200 focus:bg-blue-200"
              >
                3
              </button>
              <div className="hidden sm:block sm:mt-[-5px]">
                <h1 className="text-gray-400 font-bold">STEP 3</h1>
                <h1 className="font-bold text-white">ADDS ON</h1>
              </div>
            </div>
            <div className="mt-[-50px] flex space-x-5">
              <button
                onClick={() => {
                  setSP(false);
                  setAO(false);
                  setS(true);
                  setYI(false);
                  setP(false);
                  setBC(true);
                }}
                className="border rounded-full w-10 h-10 hover:bg-blue-200 focus:bg-blue-200"
              >
                4
              </button>
              <div className="hidden sm:block sm:mt-[-5px]">
                <h1 className="text-gray-400 font-bold">STEP 5</h1>
                <h1 className="font-bold text-white">SUMMARY</h1>
              </div>
            </div>
          </div>
          <div className="mt-[-160px] ml-6 sm:mt-0 bg-white sm:bg-none w-[300px] rounded-lg border sm:border-none sm:shadow-none shadow-lg h-[450px] sm:h-[600px] sm:w-[500px] sm:ml-[-100px]">
            {YI && <YourInfo />}
            {SP && <SelectPlan />}
            {AO && <AddsOn />}
            {S && <Summary />}
          </div>
        </div>
      </div>
    </div>
  );

  function YourInfo() {
    return (
      <div className="p-5">
        <h1 className="mt-0 sm:mt-10 font-bold text-purple-500 text-2xl sm:text-4xl">
          Personal info
        </h1>
        <p className="hidden sm:block text-gray-500">
          Please provide your name, email address, and phone number.
        </p>
        <div className="mt-4 ml-6 sm:mt-10 sm:ml-10 grid grid-cols-1 gap-8 sm:gap-10">
          <div className="grid grid-cols-1">
            <label className="text-blue-500">Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="mt-2 p-2 border-2 border-blue-900 rounded-md"
              required
            ></input>
          </div>
          <div className="grid grid-cols-1">
            <label className="text-blue-500">Email Address</label>
            <input
              type="email"
              placeholder="Enter your MailID"
              className="mt-2 p-2 border-2 border-blue-900 rounded-md"
              required
            ></input>
          </div>
          <div className="grid grid-cols-1">
            <label className="text-blue-500">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your Phone Number"
              className="mt-2 p-2 border-2 border-blue-900 rounded-md"
              required
            ></input>
          </div>
          <div className="flex justify-center sm:justify-end">
            <button
              className="bg-gradient-to-r from-blue-500 to-violet-900 p-2 w-[100px] rounded-md shadow-lg"
              type="submit"
              onClick={() => {
                setSP(true);
                setAO(false);
                setS(false);
                setYI(false);
                setP(false);
                setBC(true);
              }}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    );
  }

  function SelectPlan() {
    return (
      <div className="p-5">
        <h1 className="mt-0 sm:mt-10 font-bold text-purple-500 text-2xl sm:text-4xl">
          Select Plan
        </h1>
        <p className="hidden sm:block text-gray-500">
          You have the option of monthly or yearly billing
        </p>
        <div className="mt-4 ml-6 sm:mt-18 sm:ml-10 grid grid-cols-1 gap-4 sm:gap-5">
          <div>
            <button className="p-2 sm:p-5 border rounded-lg shadow-lg w-[230px] sm:w-[400px] hover:border-purple-950 hover:bg-blue-200 focus:bg-blue-200 focus:border-purple-950">
              <h1>Arcade</h1>
              <h1>$9/mo</h1>
            </button>
          </div>
          <div>
            <button className="p-2 sm:p-5 border rounded-lg shadow-lg w-[230px] sm:w-[400px] hover:border-purple-950 hover:bg-blue-200 focus:bg-blue-200 focus:border-purple-950">
              <h1>Advanced</h1>
              <h1>$12/mo</h1>
            </button>
          </div>
          <div>
            <button className="p-2 sm:p-5 border rounded-lg shadow-lg w-[230px] sm:w-[400px] hover:border-purple-950 hover:bg-blue-200 focus:bg-blue-200 focus:border-purple-950">
              <h1>Pro</h1>
              <h1>$15/mo</h1>
            </button>
          </div>
          <div className="ml-4 sm:ml-12 bg-blue-200 rounded-lg p-2 sm:p-5 w-[200px] sm:w-[300px]">
            <p className="flex justify-center">
              <span className="font-bold px-4 sm:px-0 sm:text-lg">
                <input type="checkbox" className="w-4 h-4" /> Monthly
              </span>
              <span className="px-5 sm:px-8 font-bold sm:text-lg">
                <input type="checkbox" className="w-4 h-4" /> Yearly
              </span>
            </p>
          </div>
          <div className="flex justify-center sm:justify-end">
            <button
              className="sm:mt-[-5px] bg-gradient-to-r from-blue-500 to-violet-900 p-2 w-[100px] rounded-md shadow-lg"
              type="submit"
              onClick={() => {
                setSP(false);
                setAO(true);
                setS(false);
                setYI(false);
                setP(false);
                setBC(true);
              }}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    );
  }
  function AddsOn() {
    return (
      <div className="p-5">
        <h1 className="mt-0 sm:mt-10 font-bold text-purple-500 text-2xl sm:text-4xl">
          Add On's
        </h1>
        <p className="text-gray-500">
          By Clicking the bellow button you can browse and can add the
          additional packs.
        </p>
        <div className="flex justify-center py-10">
          <button className="bg-blue-500 hover:bg-violet-700 rounded-lg shadow-lg p-2 text-white">
            ADD ON'S
          </button>
        </div>
        <div className="mt-[150px] sm:mt-[250px] flex justify-end">
          <button
            className="sm:mt-[-5px] bg-gradient-to-r from-blue-500 to-violet-900 p-2 w-[100px] rounded-md shadow-lg"
            type="submit"
            onClick={() => {
              setSP(false);
              setAO(false);
              setS(true);
              setYI(false);
              setP(false);
              setBC(true);
            }}
          >
            NEXT
          </button>
        </div>
      </div>
    );
  }

  function Summary() {
    return (
      <div className="p-5">
        <h1 className="mt-0 sm:mt-10 font-bold text-purple-500 text-2xl sm:text-4xl">
          Summary
        </h1>
        <p className="text-gray-500">
          Thank you for being a customer with us.
        </p>
        <div className="mt-10">
            <h1>Feedback</h1>
            <div className="mt-2">
               <input type="textarea" placeholder="Enter your feedback" className="p-5 sm:p-10 sm:w-[400px] border rounded-lg"/>
            </div>
        </div>
        <div className="mt-[150px] sm:mt-[230px] flex justify-end">
          <button
            className="sm:mt-[-5px] bg-gradient-to-r from-blue-500 to-violet-900 p-2 w-[100px] rounded-md shadow-lg"
            type="submit"
            onClick={() => {
              setBC(false);
              setP(true);
            }}
          >
            SUBMIT
          </button>
        </div>
      </div>
    );
  }
}

export default Info;
