import React from "react";
import Menu from "./Menu";
import Content from "./Content";
import Header from "./Header";
import Image from "next/image";

import circle from "../public/circle.svg";

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-b from-gray-800 to-fuchsia-900">
        <div className="absolute top-36 left-9 z-10 w-100 h-100">
          <Image src="/circle.svg" alt="Vercel Logo" width={35} height={36} />
        </div>

        <div className="absolute top-30 right-3 z-0 w-100 h-100">
          <Image src="/circle.svg" alt="Vercel Logo" width={40} height={42} />
        </div>
        <div className="absolute top-40 right-3 z-0 w-100 h-100">
          <Image src="/circle.svg" alt="Vercel Logo" width={84} height={87} />
        </div>
        <div className="absolute top-52 right-20 z-0 w-96 h-96">
          <Image src="/circle.svg" alt="Vercel Logo" width={225} height={232} />
        </div>
        <Header />

        <main>
          <Content />
        </main>
        <footer className="fixed bottom-0">
          <Menu> </Menu>
        </footer>
      </div>
    </>
  );
};
export default Layout;
