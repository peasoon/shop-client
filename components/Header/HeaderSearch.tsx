import * as React from 'react';

interface IHeaderSearchProps {
}

const HeaderSearch: React.FunctionComponent<IHeaderSearchProps> = (props) => {
  return <>
    <label>
      <input type="text" placeholder='Search...'/>
    </label>
  </>;
};

export default HeaderSearch;
