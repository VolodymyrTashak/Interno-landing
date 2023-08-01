import styled from 'styled-components';

export const AboutBox = styled.div`
margin-bottom: 50px;

@media (min-width: 1200px) {
    margin-bottom: 100px;
     }
`;

export const AboutList = styled.ul`
display: grid;
grid-column-gap: 16px;
grid-row-gap: 32px;

@media (min-width: 480px) and (max-width: 767px) {
    grid-template-columns: repeat(1,1fr);
     }
     @media (min-width: 768px) and (max-width: 1199px) {
        grid-template-columns: repeat(2,1fr);
        }
        @media (min-width: 1200px) {
            grid-template-columns: repeat(3,1fr);
            }
`;

export const AboutItem = styled.li`
text-align: center;

@media (min-width: 480px) and (max-width: 767px) {
    padding-top: 25px;
    padding-bottom: 25px;
     }
     @media (min-width: 768px) and (max-width: 1199px) {
        padding-top: 75px;
        padding-bottom: 75px;
        }
`;

export const AboutTitle = styled.h2`
font-family: DM Sans,sans-serif;
font-size: 34px;
font-style: italic;
font-weight: 600;
color: #292F36;
margin-bottom: 20px;
`;

export const AboutText = styled.p`
color: #4D5053;
font-family: DM Sans,sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
margin-bottom: 30px;
`;

export const AboutBtn = styled.button`
font-size: 20px;
line-height: 1.88;
font-weight: 700;
letter-spacing: 0.06em;
display: block;
border-radius: 10px;
border: transparent;
padding: 10px 32px;
margin-right: auto;
margin-left: auto;
min-width: 200px;
height: 60px;
font-family: inherit;
color: #FFFFFF;;
background-color: #cca377;
text-align: center;
cursor: pointer;
`;

