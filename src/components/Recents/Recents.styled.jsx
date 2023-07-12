import styled from 'styled-components';

export const RecentsBox = styled.div`
margin-bottom: 150px;
`;

export const ContentBox = styled.div`
display: grid;
justify-items: center;
text-align: center;
margin-bottom: 20px;
`;

export const ContentTitle = styled.h2`
font-family: DM Sans,sans-serif;
font-size: 34px;
font-style: italic;
font-weight: 600;
color: #415e81;
margin-bottom: 20px;
`;

export const ContentText = styled.p`
color: #4D5053;
font-family: DM Sans,sans-serif;
font-size: 22px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
margin-bottom: 40px;
`;

export const RecentsList = styled.ul`
display: grid;
grid-column-gap: 25px;
grid-row-gap: 170px;
grid-template-columns: repeat(3,1fr);
`;

export const RecentsSpan = styled.span`
position: relative;
top: -60px;
left: 10px;
background-color: #FFFFFF;
border-radius: 5px;

font-weight: 500;
font-size: 25px;
line-height: 1.36;
text-align: center;
letter-spacing: .05em;
padding: 5px;
`;

export const RecentsTitle = styled.h3`
font-family: DM Sans,sans-serif;
font-size: 25px;
font-style: italic;
font-weight: 600;
margin-bottom: 10px;
color: #6c8eb1;
`;

export const RecentsText = styled.p`
color: #4D5053;
font-family: DM Sans,sans-serif;
font-size: 22px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
`;
