import { BenefitsBox, BenefitsContent, BenefitsTitle, BenefitsText, BenefitsBtn } from "./Benefits.styled";
import benefits from "../../img/BenefitsImage.webp"

export const Benefits = () => {
    return (
      <BenefitsBox className='container'>
        <BenefitsContent>
            <BenefitsTitle>We Tackle The Most Challenging Designs</BenefitsTitle>
            <BenefitsText>The world needs innovators and problem solvers who turn challenges into greater opportunities. We have an insatiable curiosity about transformative trends challenging the status.</BenefitsText>
            <BenefitsText>012345678</BenefitsText>
            <BenefitsText>Call Us Anytime</BenefitsText>
            <BenefitsBtn type="button">Get Free Estimate</BenefitsBtn>
        </BenefitsContent>
        <img src={benefits} alt="BenefitsImage" />
      </BenefitsBox>
    );
  };