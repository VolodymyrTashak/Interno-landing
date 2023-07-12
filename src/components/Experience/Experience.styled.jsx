import styled from 'styled-components';

export const ExperienceBox = styled.div`
margin-bottom: 125px;
background-color: #F4F0EC;
padding: 150px 100px;
`;

export const ExperienceList = styled.ul`
display: grid;
grid-column-gap: 20px;
grid-row-gap: 32px;
grid-template-columns: repeat(4,1fr);
`;

export const ExperienceSpan = styled.span`
display: block;
font-weight: 700;
font-size: 50px;
line-height: 1.36;
text-align: center;
letter-spacing: .05em;
margin-bottom: 6px;
color: #CDA274;
`;

export const ExperienceText = styled.p`
text-align: center;
font-weight: 600;
font-size: 18px;
line-height: 1.36;
letter-spacing: .01em;
color: #4D5053;
`;