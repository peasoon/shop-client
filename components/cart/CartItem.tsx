import { ICartItem } from "@/redux/cartSlice";
import Image from "next/image";
import * as React from "react";
import CartItemQuantity from "./CartItemQuantity";
import { useActions, useAppSelector } from "@/redux/hooks";

interface ICartItemProps {}

const CartItem: React.FunctionComponent<ICartItem> = (props) => {
  const { removeFromCart } = useActions();
  return (
    <div className="cart-item">
      <div className="cart-item__remove">
        <button
          onClick={() => {
            removeFromCart(props.product_id);
          }}
        >
          X
        </button>
      </div>
      <div className="cart-item__image">
        <Image
          loader={() => props.image}
          src={props.image}
          alt="product image"
          fill
          unoptimized
        />
      </div>
      <div className="cart-item__title">
        <span>Title:</span> {props.name}
      </div>
      <div className="cart-item__description">
        <span>Description:</span> {props.description}
      </div>
      <div className="cart-item__quantity">
        <CartItemQuantity quantity={props.quantity} id={props.product_id} />
      </div>
    </div>
  );
};

export default CartItem;
