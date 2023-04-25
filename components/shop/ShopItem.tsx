import { useActions } from "@/redux/hooks";
import { IProduct } from "@/types/product.interface";
import Image from "next/image";
import * as React from "react";

const ShopItem: React.FunctionComponent<IProduct> = ({
  product_id,
  name,
  slug,
  description,
  category,
  image,
  price,
}) => {
  const { addToCart } = useActions();
  return (
    <div className="shop-item">
      <div className="shop-item__image">
        <Image
          loader={() => image}
          src={image}
          alt="product imaghe"
          fill
          unoptimized
        />
      </div>
      <div className="shop-item__title">
        <span>Title: </span>
        <span>{name}</span>
      </div>
      <div className="shop-item__description">
        <span>Description: </span>
        <span>{description}</span>
      </div>
      <div className="shop-item__category">
        <span>Category: </span>
        <span>{category}</span>
      </div>
      <div className="shop-item__price">
        <span>Price: </span>
        <span>
          {Number(price).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      </div>
      <div className="shop-item__add">
        <button
          onClick={() => {
            addToCart({
              product_id,
              name,
              slug,
              description,
              category,
              image,
              price,
              quantity: 1,
            });
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ShopItem;
