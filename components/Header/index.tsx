import * as React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import HeaderCart from "./HeaderCart";
import CartDrawer from "../cart/CartDrawer";
import Categories from "../Categories";

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
          <CartDrawer />
        </div>
      </div>
    </header>
  );
};

export default Header;
