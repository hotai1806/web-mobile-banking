import React from "react";
import { User, Calendar, CreditCard, FolderMinus } from 'react-feather'
const Menu = ({ children }) => {
  return (
    <>
      <div className="bg-black block w-screen rounded-t-lg">
        <div className="flex h-16 justify-center items-center text-center mt-6  ">
          <div className="text-blue-600 w-2/6 shadow-lg p-10 text-center"><CreditCard /></div>
          <div className="text-blue-600 w-2/6 shadow-lg p-10 text-center"><Calendar /></div>
          <div className="text-blue-600 w-2/6 shadow-lg p-10 text-center"><FolderMinus /></div>
          <div className="text-blue-600 w-2/6 shadow-lg p-10 text-center"><User /></div>

        </div>
      </div>
    </>
  )

}
export default Menu