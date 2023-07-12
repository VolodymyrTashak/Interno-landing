import styled from 'styled-components';

export const AboutBox = styled.div`
margin-bottom: 100px;
`;

export const AboutList = styled.ul`
display: grid;
grid-column-gap: 16px;
grid-row-gap: 32px;
grid-template-columns: repeat(3,1fr);
`;

export const AboutItem = styled.li`
text-align: center;
padding-top: 75px;
padding-bottom: 75px;
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
text-align: start;
cursor: pointer;
`;
