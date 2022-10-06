import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDownLeft } from "react-feather";
const main_cerency = " VND";

let mock_transaction = [
  {
    id: "1",
    money: "VND 5.000,000,000.00",
    date_time: "09/25/2020",
    type: "Deposit",
    from: "Vietnam",
    description: "Deposit from Vietcombank",
  },
  {
    id: 2,
    money: "VND 5.000,000,000.00",
    date_time: "09/25/2020",
    type: "Credit",
    from: "Vietnam",
    description: "Deposit from Vietcombank",
  },
];

const ButtonSee = () => {
  return (
    <div className="flex justify-end">
      <button className="  text-red-500 font-bold py-2 px-4 rounded-full">
        See all
      </button>
    </div>
  );
};

const Title = () => {
  return (
    <div className=" p-2">
      <div className=" text-2xl">Details</div>
      <div className=" ">
        <Image src={"/vietnam.png"} width={19} height={13} />
        {main_cerency}
      </div>
      <ButtonSee></ButtonSee>
      <div className="divide-y divide-gray-400 md:divide-y-8"></div>
    </div>
  );
};

const TransactionRecord = ({ money, date_time, from, description, type }) => {
  return (
    <div className="flex justify-between p-2">
      <div>
        {type == "Deposit" ? (
          <ArrowUpRight className=" text-green-500" />
        ) : (
          <ArrowDownLeft className=" text-red-500" />
        )}
      </div>
      <div>
        <div className=" text-base">{money}</div>
        <div className=" text-sm">{date_time}</div>
      </div>
      <div>
        <div className=" text-base">{description}</div>
        <div className=" text-sm"> {from}</div>
      </div>
    </div>
  );
};

const TransactionHistory = ({ mock_transaction }) => {
  return (
    <div>
      {mock_transaction?.map((item) => {
        return (
          <TransactionRecord
            key={item.id}
            money={item.money}
            date_time={item.date_time}
            from={item.from}
            description={item.description}
            type={item.type}
          />
        );
      })}
    </div>
  );
};

const Transaction = () => {
  return (
    <>
      <div className="divide-y px-4 divide-[#CDCDDF] rounded-t-2xl bg-[#F0F2F4]/90  backdrop-blur-sm not-italic text-black font-['Abel, sans-serif']">
        <Title />
        <TransactionHistory mock_transaction={mock_transaction} />
      </div>
    </>
  );
};
export default Transaction;
