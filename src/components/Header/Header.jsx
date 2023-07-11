import { HeaderBox, HeaderList, HeaderItem, LogoWrapper, LogoTitle } from "./Header.styled";
import logo from "../../img/Logo.png"
export const Header = () => {
    return (
      <HeaderBox className="container">
        <LogoWrapper>
        <img src={logo} alt="Logo" width="34" height="34" />
        <LogoTitle>Interno</LogoTitle>
        </LogoWrapper>
        <HeaderList>
                <HeaderItem>Home</HeaderItem>
                <HeaderItem>About Us</HeaderItem>
                <HeaderItem>Services</HeaderItem>
                <HeaderItem>Pages</HeaderItem>
                <HeaderItem>Contact Us</HeaderItem>
        </HeaderList>
      </HeaderBox>
    );
  };
  