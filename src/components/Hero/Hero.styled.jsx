import styled from 'styled-components';

export const HeroBox = styled.div`
width: 100%;
margin-bottom: 100px;
`;

export const Heroimg = styled.img`
@media (min-width: 1200px) {
    width: 100%;
    height: 831px;
    }
`;

export const HeroContent = styled.div`
position: absolute;
top: 300px;
width: 550px;
`;

export const HeroTitle = styled.h1`
font-family: DM Sans,sans-serif;
font-size: 70px;
font-style: italic;
font-weight: 500;
color: #415e81;
margin-bottom: 10px;
`;

export const HeroText = styled.p`
color: #4D5053;
font-family: DM Sans,sans-serif;
font-size: 25px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
margin-bottom: 40px;
`;

export const HeroBtn = styled.button`
font-size: 20px;
line-height: 1.88;
font-weight: 700;
letter-spacing: 0.06em;
display: block;
border-radius: 4px;
border: transparent;
padding: 10px 32px;
min-width: 200px;
height: 60px;
font-family: inherit;
color: #FFFFFF;;
background-color: #292F36;
text-align: start;
cursor: pointer;
`;


