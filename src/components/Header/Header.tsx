import { ReactElement } from 'react';
import Select from '../Select/Select';
import Logo from '../Svg/Logo';
import { StyledHeaderContainer } from './Header.styles';

function Header(): ReactElement {
  return (
    <StyledHeaderContainer>
      <a href='https://www.jellyfish.com/en-in' rel="noopener noreferrer" target="_blank">
        <Logo></Logo>
      </a>
      <Select></Select>
    </StyledHeaderContainer>
  );
}

export default Header;
