import { useActions, useAppSelector } from "@/redux/hooks";
import { debounce } from "lodash";
import * as React from "react";
import { useCallback } from "react";

interface IHeaderSearchProps {}

const HeaderSearch: React.FunctionComponent<IHeaderSearchProps> = (props) => {
  const { setSearchString } = useActions();
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };
  const debouncedInput = useCallback(debounce(inputHandler, 700), []);
  const searchString = useAppSelector((state) => state.search.searchString);
  return (
    <>
      <label>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            debouncedInput(e);
          }}
        />
      </label>
    </>
  );
};

export default HeaderSearch;
