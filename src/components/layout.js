import React from "react"
import Header from "./header"
import Footer from './Footer'
import {GlobalStyle} from './GlobalStyle'


const Layout = ({ children }) => {
  
  return (
    <>
      <GlobalStyle />
        <Header />
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default Layout
