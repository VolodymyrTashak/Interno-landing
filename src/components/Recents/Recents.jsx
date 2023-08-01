import { RecentsBox, RecentsImg, ContentBox, ContentTitle, ContentText, RecentsList, RecentsSpan, RecentsWrapper, RecentsTitle, RecentsText } from "./Recents.styled"; 
import image1 from "../../img/Recents/Kitchen Design.webp"
import image2 from "../../img/Recents/Living Room.webp"
import image3 from "../../img/Recents/Minimalist Interior.webp"
import image4 from "../../img/Recents/Kitchen Design-2.webp"
import image5 from "../../img/Recents/Living Room-2.webp"
import image6 from "../../img/Recents/Minimalist Interior-2.webp"

export const Recents = () => {
    return (
      <RecentsBox className="container">
        <ContentBox>
        <ContentTitle>Recent Blogs</ContentTitle>
        <ContentText>Get updates about our latest trends and techniques used in interior design project works.</ContentText>
        </ContentBox>
        
        <RecentsList>
            <li>
                <RecentsImg src={image1} alt="Kitchen Design" />
                <RecentsSpan>Kitchen Design</RecentsSpan>
                <RecentsWrapper>
                 <RecentsTitle>Residential Interior Designer In New York, USA</RecentsTitle>
                 <RecentsText>November 23, 2021</RecentsText>
                </RecentsWrapper>
            </li>
            <li>
                <RecentsImg src={image2} alt="Living Room" />
                <RecentsSpan>Living Room</RecentsSpan>
                <RecentsWrapper>
                 <RecentsTitle>How To Choose The Best Wall Art & Decor House?</RecentsTitle>
                 <RecentsText>November 23, 2021</RecentsText>
                </RecentsWrapper>
            </li>
            <li>
                <RecentsImg src={image3} alt="Minimalist Interior" />
                <RecentsSpan>Minimalist Interior</RecentsSpan>
                <RecentsWrapper>
                <RecentsTitle>Tips To Increase The Interior Value Of Your House</RecentsTitle>
                <RecentsText>November 23, 2021</RecentsText>
                </RecentsWrapper>
            </li>
            <li>
                <RecentsImg src={image4} alt="Kitchen Design" />
                <RecentsSpan>Kitchen Design</RecentsSpan>
                <RecentsWrapper>
                 <RecentsTitle>Best Solution For Any Office & Business Interior</RecentsTitle>
                 <RecentsText>November 23, 2021</RecentsText>
                </RecentsWrapper>
            </li>
            <li>
                <RecentsImg src={image5} alt="Living Room" />
                <RecentsSpan>Living Room</RecentsSpan>
                <RecentsWrapper>
                 <RecentsTitle>Get Solution For Building Construction Work</RecentsTitle>
                 <RecentsText>November 23, 2021</RecentsText>
                </RecentsWrapper>
            </li>
            <li>
                <RecentsImg src={image6} alt="Minimalist Interior" />
                <RecentsSpan>Minimalist Interior</RecentsSpan>
                <RecentsWrapper>
                 <RecentsTitle>Attain The Best Finish For The Kitchen Cabinets</RecentsTitle>
                 <RecentsText>November 23, 2021</RecentsText>
                </RecentsWrapper>
            </li>
        </RecentsList>
      </RecentsBox>
    );
  };