import Image from "next/image";
import * as React from "react";

interface IHeaderCartProps {}

const HeaderCart: React.FunctionComponent<IHeaderCartProps> = (props) => {
  return (
    <>
      <Image src="/cart-icon.svg" alt="cart" fill />
    </>
  );
};

export default HeaderCart;
