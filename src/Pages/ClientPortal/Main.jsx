import React from "react";

const Main = () => {
  return (
    <div className="pt-9 pb-14 flex flex-col justify-center items-center  ">
      <div className=" h-[350px] w-2/3  bg-slate-600 rounded-3xl"></div>
      <div className=" h-[350px] w-full mt-14 flex flex-row justify-center gap-36 items-center">
        <div className=" h-[350px] w-1/3  bg-slate-600 rounded-3xl "></div>
        <div className=" h-[350px] w-1/3  bg-slate-600 rounded-3xl "></div>
      </div>
      <div className=" h-[350px] w-full mt-14 flex flex-row justify-center gap-36 items-center">
        <div className=" h-[350px] w-1/3  bg-slate-600 rounded-3xl  "></div>
        <div className=" h-[350px] w-1/3  bg-slate-600 rounded-3xl "></div>
      </div>
      <div className=" h-[350px] w-2/3  bg-slate-600 rounded-3xl mt-14"></div>
    </div>
  );
};

export default Main;
