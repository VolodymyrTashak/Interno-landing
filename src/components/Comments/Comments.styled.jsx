import styled from 'styled-components';

export const CommentsBox = styled.div`
background-color: #F4F0EC;
margin-bottom: 140px;
text-align: center;
padding: 100px 45px;
border-radius: 25px;
`;

export const CommentsTitle = styled.h2`
font-family: DM Sans,sans-serif;
font-size: 34px;
font-style: italic;
font-weight: 600;
color: #415e81;
margin-bottom: 20px;
`;

export const CommentsList = styled.ul`
display: grid;
grid-column-gap: 16px;
grid-row-gap: 32px;
grid-template-columns: repeat(3,1fr);
`;

export const CommentsItem = styled.li`
text-align: center;
padding: 60px 20px;
background-color: #fff;
border-radius: 25px;
`;

export const CommentsWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
`;

export const UserBox = styled.div`
margin-left: 30px;
`;

export const UserTitle = styled.h3`
font-family: DM Sans,sans-serif;
font-size: 25px;
font-style: italic;
font-weight: 600;
margin-bottom: 5px;
`;

export const UserText = styled.p`
color: #4D5053;
font-family: DM Sans,sans-serif;
font-size: 22px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
`;

export const CommentsText = styled.p`
color: #4D5053;
font-family: DM Sans,sans-serif;
font-size: 25px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
`;