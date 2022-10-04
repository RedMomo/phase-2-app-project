import React from "react";

function Header() {
  function homeClick() {
    console.log("home click!")
}
  // create function to make clicking the header reroute to home
  return (
    <header onClick={homeClick}>
      <h1>
        Seymour's Plant Shop
        <span className="logo" role="img">
          🌱
        </span>
      </h1>
    </header>
  );
}

export default Header;