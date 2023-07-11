import { AboutBox, AboutList, AboutItem, AboutTitle, AboutText, AboutBtn } from "./About.styled";

export const About = () => {
    return (
      <AboutBox className='container'>
        <AboutList>
            <AboutItem>
                <AboutTitle>Interior Design</AboutTitle>
                <AboutText>Enhancing the interior to achieve a healthier environment for the people using right space.</AboutText>
                <AboutBtn type='button'>View More</AboutBtn>
            </AboutItem>
            <AboutItem>
                <AboutTitle>Furniture</AboutTitle>
                <AboutText>Movable articles that are used to make a room or building suitable for living or working.</AboutText>
                <AboutBtn type='button'>View More</AboutBtn>
            </AboutItem>
            <AboutItem>
                <AboutTitle>Flooring</AboutTitle>
                <AboutText>Thin object any finished material applied over a floor structure to provide a walking surface.</AboutText>
                <AboutBtn type='button'>View More</AboutBtn>
            </AboutItem>
        </AboutList>
      </AboutBox>
    );
  };