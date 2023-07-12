import { ExperienceBox, ExperienceList, ExperienceSpan, ExperienceText } from "./Experience.styled";

export const Experience = () => {
    return (
      <ExperienceBox>
        <ExperienceList>
            <li>
                <ExperienceSpan>12</ExperienceSpan>
                <ExperienceText>Years Of Experiance</ExperienceText>
            </li>
            <li>
                <ExperienceSpan>5K</ExperienceSpan>
                <ExperienceText>Success Project</ExperienceText>
            </li>
            <li>
                <ExperienceSpan>1K</ExperienceSpan>
                <ExperienceText>Active Project</ExperienceText>
            </li>
            <li>
                <ExperienceSpan>4K</ExperienceSpan>
                <ExperienceText>Happy Customers</ExperienceText>
            </li>
        </ExperienceList>
      </ExperienceBox>
    );
  };