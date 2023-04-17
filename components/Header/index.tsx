import * as React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import HeaderCart from "./HeaderCart";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-logo">
          <HeaderLogo />
        </div>
        <div className="header-search">
          <HeaderSearch />
        </div>
        <div className="header-cart">
          <HeaderCart />
        </div>
      </div>
    </header>
  );
};

export default Header;
