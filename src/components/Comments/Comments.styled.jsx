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