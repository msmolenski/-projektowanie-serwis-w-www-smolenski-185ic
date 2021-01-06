import React from "react";

// NavBar przedstawiający ilość różnych produktów w koszyku


const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
        <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
          {totalCounters}
        </span>
        Liczba produktów
      </div>
    </nav>
  );
};

export default NavBar;