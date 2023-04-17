import * as React from "react";
import Header from "./Header";
import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";

interface ILayoutProps {}

const Layout: FC<PropsWithChildren<ILayoutProps>> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
