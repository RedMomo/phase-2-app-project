import React from "react";

function Header() {
  function homeClick() {
    console.log("home click!");
  }
  // create function to make clicking the header reroute to home
  return (
    <header onClick={homeClick}>
      <p className="header-title center green">Seymours Plant Shop</p>
    </header>
  );
}

export default Header;
