import React from "react";
import { User, Calendar, CreditCard, FolderMinus } from "react-feather";
const Menu = ({ children }) => {
  return (
    <>
      <div className="bg-white block w-screen rounded-t-lg">
        <div className="flex h-20 text-center text-xs">
          <div className=" px-6 py-2 w-1/4 ">
            <CreditCard />
            <div className="absolute top-9 left-4 mt-1">My Card</div>{" "}
          </div>
          <div className=" px-6 py-2 w-1/4 ">
            <Calendar />
            <div className="absolute top-9 right-56 mt-1">Payments</div>
          </div>
          <div className=" px-6 py-2 w-1/4 ">
            <FolderMinus />
            <div className="absolute top-9 right-32 mt-1">Transfer</div>
          </div>
          <div className="px-6 py-2 w-1/4 ">
            <User />
            <div className="absolute top-9 right-10 mt-1">Profile</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
