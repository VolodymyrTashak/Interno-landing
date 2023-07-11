import { HeroBox, Heroimg, HeroContent, HeroTitle, HeroText, HeroBtn } from './Hero.styled'
import hero from "../../img/Hero.webp"

export const Hero = () => {
  return (
    <HeroBox>
      <Heroimg src={hero} />
      <HeroContent className='container'>
        <HeroTitle>Let's Create Your Dream Interior</HeroTitle>
        <HeroText>The world needs innovators and problem solvers who turn challenges into greater opportunities.</HeroText>
      <HeroBtn type='button'>Get Started</HeroBtn>
      </HeroContent>
    </HeroBox>
  );
};