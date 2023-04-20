import instance from "@/api/api_instance";
import ShopItem from "@/components/shop/ShopItem";
import { IProduct } from "@/types/product.interface";
import { GetStaticPropsContext, GetStaticPropsResult, NextPage } from "next";
import * as React from "react";

interface IShopPage {
  products: IProduct[];
}

const ShopPage: NextPage<IShopPage> = (props) => {
  return (
    <main>
      <div className="container">
        <div className="shop">
          {props.products &&
            props.products.map((product) => (
              <ShopItem key={product.product_id} {...product} />
            ))}
        </div>
      </div>
    </main>
  );
};

export const getStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<{ products: IProduct[] }>> => {
  let products = [];
  try {
    products = (await instance.get("/products")).data;
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      products,
    },
  };
};

export default ShopPage;
