import { IProduct } from "@/types/product.interface";
import Image from "next/image";
import * as React from "react";

const ShopItem: React.FunctionComponent<IProduct> = ({
  name,
  description,
  category,
  image,
  price,
}) => {
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
    </div>
  );
};

export default ShopItem;
