import { CommentsBox, CommentsTitle, CommentsList, CommentsItem, CommentsWrapper, UserBox, UserTitle, UserText, CommentsText } from "./Comments.styled";
import user1 from "../../img/Lisa Clairton.webp"
import user2 from "../../img/David Knight.webp"
import user3 from "../../img/Lisa Knight.webp"

export const Comments = () => {
    return (
      <CommentsBox className='container'>
        <CommentsTitle>What the People Thinks About Interno</CommentsTitle>
        <CommentsList>
            <CommentsItem>
                <CommentsWrapper>
                    <img src={user1} alt="Lisa Clairton" width={77} height={77} />
                    <UserBox>
                        <UserTitle>Lisa Clairton</UserTitle>
                        <UserText>New York, USA</UserText>
                    </UserBox>
                </CommentsWrapper>
                <CommentsText>We selected Interno interior because of rigorous design background & education.</CommentsText>
            </CommentsItem>
            <CommentsItem>
                <CommentsWrapper>
                <img src={user2} alt="David Knight" width={77} height={77} />
                    <UserBox>
                        <UserTitle>David Knight</UserTitle>
                        <UserText>Sydney, Australia</UserText>
                    </UserBox>
                </CommentsWrapper>
                <CommentsText>The team exceeded our expectations and emerged as leaders of our project’s.</CommentsText>
            </CommentsItem>
            <CommentsItem>
                <CommentsWrapper>
                <img src={user3} alt="Lisa Knight" width={77} height={77} />
                    <UserBox>
                        <UserTitle>Lisa Knight</UserTitle>
                        <UserText>Paris, France</UserText>
                    </UserBox>
                </CommentsWrapper>
                <CommentsText>They balanced the architectural vision and the project realities beautifully.</CommentsText>
            </CommentsItem>
        </CommentsList>
      </CommentsBox>
    );
  };