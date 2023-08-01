import styled from 'styled-components';

export const FooterBox = styled.div`
margin-bottom: 200px;
display: grid;
grid-template-columns: repeat(3,1fr);
`;

export const ContentBox = styled.div`
@media (min-width: 1200px) {
    width: 300px;
  }
`;

export const ContentDescr = styled.p`
margin-top: 30px;
color: #4D5053;
font-family: DM Sans,sans-serif;
font-size: 22px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
`;

export const PagesBox = styled.div`
text-align: center;
@media (min-width: 1200px) {
    width: 300px;
  }
`;

export const PagesTitle = styled.h3`
font-family: DM Sans,sans-serif;
font-size: 32px;
font-style: normal;
font-weight: 500;
margin-bottom: 30px;
`;

export const PagesList = styled.ul`
display: grid;
grid-template-columns: repeat(2,1fr);
margin-left: 30px;
`;

export const PagesItem = styled.li`
display: flex;
color: #4D5053;
font-family: DM Sans,sans-serif;
font-size: 22px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
&:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ContactsTitle = styled.h3`
font-family: DM Sans,sans-serif;
font-size: 32px;
font-style: normal;
font-weight: 500;
margin-bottom: 30px;
`;

export const ContactsItem = styled.li`
&:not(:last-child) {
    margin-bottom: 10px;
  }
`;

