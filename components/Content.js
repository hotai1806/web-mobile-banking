import React from "react";
import Card from "./Card";
import Transaction from "./Transaction";
const Content = () => {
  return (
    <>
      <div className="text-white not-italic">
        <div
          className="text-4xl"
          style={{ fontFamily: "Abel, sans-serif" }}
        >
          Cards
        </div>
        <div className="p-6">
          <Card />
        </div>
        <div className=" h-96 mt-7">
        <Transaction/>

        </div>
      </div>
    </>
  );
};
export default Content;
