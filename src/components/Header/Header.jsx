import { HeaderBox, HeaderLogo, HeaderList, HeaderItem, LogoWrapper, LogoTitle } from "./Header.styled";
import logo from "../../img/Logo.png"
export const Header = () => {
    return (
      <HeaderBox className="container">
        <LogoWrapper>
        <HeaderLogo src={logo} alt="Logo" />
        <LogoTitle>Interno</LogoTitle>
        </LogoWrapper>
        <HeaderList>
                <HeaderItem>Home</HeaderItem>
                <HeaderItem>About Us</HeaderItem>
                <HeaderItem>Services</HeaderItem>
                <HeaderItem>Pages</HeaderItem>
                <HeaderItem><a href="#contact">Contact Us</a></HeaderItem>
        </HeaderList>
      </HeaderBox>
    );
  };
  