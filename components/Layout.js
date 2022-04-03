import React from "react"
import Menu from "./Menu"
const Layout = ({ children }) => {
  return (
    <>
      <main></main>
      <footer className="fixed bottom-0"><Menu></Menu></footer>
    </>
  )

}
export default Layout