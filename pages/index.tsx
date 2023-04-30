import instance from "@/api/api_instance";
import Categories from "@/components/Categories";
import ShopItem from "@/components/shop/ShopItem";
import { fetchCategories } from "@/redux/categoriesSlice";
import { useActions, useAppDispatch, useAppSelector } from "@/redux/hooks";
import { IProduct } from "@/types/product.interface";
import { GetStaticPropsContext, GetStaticPropsResult, NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

interface IShopPage {
  products: IProduct[];
}

const ShopPage: NextPage<IShopPage> = (props) => {
  async function changeStock(category: string, searchStr: string) {
    const data = (
      await instance.get(
        `/products?${category ? `category=${category}` : ''}${
          searchStr ? `&title=${searchStr}` : ''
        }`
      )
    ).data as IProduct[];
    setStock(data);
  }
  const dispatch = useAppDispatch();

  const [stock, setStock] = useState(props.products);
  const currentCategory = useAppSelector(
    (state) => state.categories.currentCategory
  );

  const searchString = useAppSelector((state) => state.search.searchString);
  const router = useRouter();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    if (router.query.hasOwnProperty("category")) {
      console.log("has own");
      changeStock(router.query.category as string, searchString);
    } else {
      changeStock(currentCategory, searchString);
    }
  }, [router.query, searchString]);

  return (
    <main>
      <div className="container">
        <div className="shop-categories">
          <Categories />
        </div>
        <div className="shop">
          {stock &&
            stock.map((product) => (
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
