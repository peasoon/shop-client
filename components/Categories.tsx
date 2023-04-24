import { useActions, useAppSelector } from "@/redux/hooks";
import { spawn } from "child_process";
import { useRouter } from "next/router";

interface ICategoriesProps {}

const Categories: React.FunctionComponent<ICategoriesProps> = (props) => {
  const categories = useAppSelector((state) => state.categories.categories);
  const { setCurrentCategory } = useActions();
  const router = useRouter();
  return (
    <div className="categories">
      {categories &&
        categories.map((category) => (
          <span
            key={category}
            onClick={() => {
              setCurrentCategory(category);
              router.push(`/?category=${category}`);
            }}
          >
            {category}
          </span>
        ))}
      <span
        onClick={() => {
          setCurrentCategory("");
          router.push("/");
        }}
      >
        All
      </span>
    </div>
  );
};

export default Categories;
