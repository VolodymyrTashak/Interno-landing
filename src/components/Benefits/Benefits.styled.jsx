import styled from 'styled-components';

export const BenefitsBox = styled.div`
display: flex;
@media (min-width: 480px) and (max-width: 767px) {
    margin-bottom: 50px;
    flex-wrap: wrap;
    flex-direction: column-reverse;
      }
      @media (min-width: 768px) {
        margin-bottom: 100px;
        justify-content: space-between;
      }
`;

export const BenefitsContent = styled.div`
max-width: 500px;

@media (min-width: 480px) and (max-width: 767px) {
    margin-right: auto;
    margin-left: auto;
    margin-top: 40px;
    text-align: center;
      }
      @media (min-width: 768px) {
        margin-right: 15px;
          }

`;

export const BenefitsTitle = styled.h2`
font-family: DM Sans,sans-serif;
font-size: 34px;
font-style: italic;
font-weight: 600;
color: #415e81;
margin-bottom: 20px;
`;

export const BenefitsDescr = styled.p`
color: #4D5053;
font-family: DM Sans,sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
margin-bottom: 30px;
`;

export const BenefitsText = styled.p`
color: #4D5053;
font-family: DM Sans,sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
margin-bottom: 10px;
`;

export const BenefitsBtn = styled.button`
font-size: 20px;
line-height: 1.88;
font-weight: 700;
letter-spacing: 0.06em;
display: block;
border-radius: 10px;
border: transparent;
padding: 10px 32px;
min-width: 200px;
height: 60px;
font-family: inherit;
color: #FFFFFF;;
background-color: #292F36;
text-align: start;
cursor: pointer;
margin-top: 20px;

@media (min-width: 480px) and (max-width: 767px) {
    margin-right: auto;
    margin-left: auto;
      }
`;

export const BenefitsImg = styled.img`
@media (min-width: 768px) and (max-width: 1199px) {
    width: 350px;
  }
`;


// @media (min-width: 480px) and (max-width: 767px) {
//     grid-template-columns: repeat(1,1fr);
//      }
//      @media (min-width: 768px) and (max-width: 1199px) {
//         grid-template-columns: repeat(2,1fr);
//         }
//         @media (min-width: 1200px) {
//             grid-template-columns: repeat(3,1fr);
//             }
