import { BenefitsBox, BenefitsContent, BenefitsTitle, BenefitsDescr, BenefitsText, BenefitsBtn, BenefitsImg } from "./Benefits.styled";
import benefits from "../../img/BenefitsImage.webp"

export const Benefits = () => {
    return (
      <BenefitsBox className='container'>
        <BenefitsContent>
            <BenefitsTitle>We Tackle The Most Challenging Designs</BenefitsTitle>
            <BenefitsDescr>The world needs innovators and problem solvers who turn challenges into greater opportunities. We have an insatiable curiosity about transformative trends challenging the status.</BenefitsDescr>
            <BenefitsText><a href="tel:1234567890">(123) 456 - 7890</a></BenefitsText>
            <BenefitsText>Call Us Anytime</BenefitsText>
            <BenefitsBtn type="button">Get Free Estimate</BenefitsBtn>
        </BenefitsContent>
        <BenefitsImg src={benefits} alt="BenefitsImage" />
      </BenefitsBox>
    );
  };