import logo from "../../img/Logo.png"
import { FooterBox, ContentBox, ContentDescr, PagesBox, PagesTitle, PagesList, PagesItem, ContactsTitle, ContactsItem } from "./Footer.styled"
import { LogoWrapper, LogoTitle } from "../Header/Header.styled"

export const Footer = () => {
    return ( 
        <FooterBox className="container" id="contact" >
            <ContentBox>
              <LogoWrapper>
                <img src={logo} alt="Logo" width="34" height="34" />
                <LogoTitle>Interno</LogoTitle>
              </LogoWrapper>
              <ContentDescr>We are the leading architect and interior design firm in the world.</ContentDescr>
            </ContentBox>
            <PagesBox>
                <PagesTitle>Pages</PagesTitle>
                <PagesList>
                 <PagesItem>Home</PagesItem>
                 <PagesItem>About Us</PagesItem>
                 <PagesItem>Services</PagesItem>
                 <PagesItem>Pages</PagesItem>
                 <PagesItem>Contact Us</PagesItem>
                 </PagesList>
            </PagesBox>
            <ContentBox>
                <ContactsTitle>Contact</ContactsTitle>
                <ul>
                    <ContactsItem>
                        <a href="https://www.google.com.ua/maps/search/53,+East+Birchwood+Ave.+Brooklyn,+New+York+11201,+USA./@40.6873633,-73.9938048,17z/data=!3m1!4b1?hl=ru&entry=ttu" >53, East Birchwood Ave. Brooklyn, New York 11201, USA.</a>
                    </ContactsItem>
                    <ContactsItem>
                        <a href="mailto:contact@interno.com">contact@interno.com</a>
                    </ContactsItem>
                    <ContactsItem>
                        <a href="tel:1234567890">(123) 456 - 7890</a>
                    </ContactsItem>
                </ul>
            </ContentBox>
        </FooterBox>
    )
}