import React from "react";
import Menu from "./Menu";
import Image from "next/image";

let title_name = " Curreent balance";
let current_amount = "VND 5.000,000,000.00";
let pin_code = "**** **** **** 1289";
let expire_date = "09/25";
const Card = () => {
  return (
    <>
      <div className="font-normal not-italic tracking-wide p-6 backdrop-blur-sm bg-white/20  rounded-lg w-80 h-52 font-['Abel, sans-serif'] border-slate-200  border-[0.4px] shadow-md">
        <div className=" text-sm mt-2">{title_name} </div>
        <div className=" text-2xl mt-1" style={{lineHeight:'19px'}}>{current_amount}</div>
        <div className="tracking-[.35em] text-sm mt-6">{pin_code}</div>
        <div className=" text-sm mt-6">{expire_date}</div>
        <div className=" absolute right-7 top-36">
          <Image src={"/mastercard_logo.png"} width={45} height={36}></Image>
        </div>
      </div>
    </>
  );
};
export default Card;
