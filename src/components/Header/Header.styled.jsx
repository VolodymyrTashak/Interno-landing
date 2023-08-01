import styled from 'styled-components';

export const HeaderBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 25px;
margin-bottom: 25px;
`;

export const HeaderLogo = styled.img`
@media (min-width: 480px) {
 width: 25px;
 height: 25px;
  }
  @media (min-width: 768px) {
    width: 34px;
    height: 34px;
     }
`;

export const HeaderList = styled.ul`
display: flex;
align-items: center;
`;

export const HeaderItem = styled.li`
&:not(:last-child){
    margin-right: 35px;
}

&:hover {
    color: #CDA274;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

}

color: #292F36;
padding-top: 15px;
padding-bottom: 15px;
font-family: DM Sans,sans-serif;
font-size: 25px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
`;

export const LogoWrapper = styled.div`
display: flex;
`;

export const LogoTitle = styled.p`
font-family: DM Sans,sans-serif;
font-style: normal;
font-weight: 500; 
margin-left: 10px;

@media (min-width: 480px) {
    font-size: 26px;
     }
     @media (min-width: 768px) {
       font-size: 32px;
        }
`;