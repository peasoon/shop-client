import Image from 'next/image';
import * as React from 'react';

interface IHeaderLogoProps {
}

const HeaderLogo: React.FunctionComponent<IHeaderLogoProps> = (props) => {
  return <>
    <Image src={'/header-logo.jpg'} alt='logo' fill/>
  </>;
};

export default HeaderLogo;
