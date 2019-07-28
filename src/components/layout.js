import React from "react";
import Header from "./header";
import Footer from './footer';
import "../assets/allStyles.css"

const Layout = ({ children, pageTitle }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Header pageTitle={pageTitle} />
      <main className="bg-container">
          {children}
        <div style={{position: 'sticky', bottom: '0'}}>
          <div className="tri" />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout;
