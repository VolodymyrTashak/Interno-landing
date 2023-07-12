import { RecentsBox, ContentBox, ContentTitle, ContentText, RecentsList, RecentsSpan, RecentsTitle, RecentsText } from "./Recents.styled"; 
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
                <img src={image1} alt="Kitchen Design" height={345} />
                <RecentsSpan>Kitchen Design</RecentsSpan>
                <RecentsTitle>Residential Interior Designer In New York, USA</RecentsTitle>
                <RecentsText>November 23, 2021</RecentsText>
            </li>
            <li>
                <img src={image2} alt="Living Room" height={345} />
                <RecentsSpan>Living Room</RecentsSpan>
                <RecentsTitle>How To Choose The Best Wall Art & Decor House?</RecentsTitle>
                <RecentsText>November 23, 2021</RecentsText>
            </li>
            <li>
                <img src={image3} alt="Minimalist Interior" height={345} />
                <RecentsSpan>Minimalist Interior</RecentsSpan>
                <RecentsTitle>Tips To Increase The Interior Value Of Your House</RecentsTitle>
                <RecentsText>November 23, 2021</RecentsText>
            </li>
            <li>
                <img src={image4} alt="Kitchen Design" height={345} />
                <RecentsSpan>Kitchen Design</RecentsSpan>
                <RecentsTitle>Best Solution For Any Office & Business Interior</RecentsTitle>
                <RecentsText>November 23, 2021</RecentsText>
            </li>
            <li>
                <img src={image5} alt="Living Room" height={345} />
                <RecentsSpan>Living Room</RecentsSpan>
                <RecentsTitle>Get Solution For Building Construction Work</RecentsTitle>
                <RecentsText>November 23, 2021</RecentsText>
            </li>
            <li>
                <img src={image6} alt="Minimalist Interior" height={345} />
                <RecentsSpan>Minimalist Interior</RecentsSpan>
                <RecentsTitle>Attain The Best Finish For The Kitchen Cabinets</RecentsTitle>
                <RecentsText>November 23, 2021</RecentsText>
            </li>
        </RecentsList>
      </RecentsBox>
    );
  };