import { CommentsBox, CommentsTitle, CommentsList, CommentsItem } from "./Comments.styled";

export const Comments = () => {
    return (
      <CommentsBox className='container'>
        <CommentsTitle>What the People Thinks About Interno</CommentsTitle>
        <CommentsList>
            <CommentsItem>
                <div>
                    <img />
                    <div>
                        <h3>Lisa Clairton</h3>
                        <p>New York, USA</p>
                    </div>
                </div>
                <p>We selected Interno interior because of rigorous design background & education.</p>
            </CommentsItem>
            <CommentsItem>
                <div>
                    <img />
                    <div>
                        <h3>David Knight</h3>
                        <p>Sydney, Australia</p>
                    </div>
                </div>
                <p>The team exceeded our expectations and emerged as leaders of our project’s.</p>
            </CommentsItem>
            <CommentsItem>
                <div>
                    <img />
                    <div>
                        <h3>Lisa Clairton</h3>
                        <p>Paris, France</p>
                    </div>
                </div>
                <p>They balanced the architectural vision and the project realities beautifully.</p>
            </CommentsItem>
        </CommentsList>
      </CommentsBox>
    );
  };