import { ProjectsBox, ContentBox, Title, Text, ProjectsList, ProjectsImage, ProjectsTitle, ProjectsText } from "./Projects.styled"; 
import image1 from "../../img/Projects/Image-1.webp"
import image2 from "../../img/Projects/Image-2.webp"
import image3 from "../../img/Projects/Image-3.webp"
import image4 from "../../img/Projects/Image-4.webp"

export const Projects = () => {
    return (
        <ProjectsBox className='container'>
            <ContentBox>
            <Title>Recent Projects</Title>
            <Text>With tools to make every part of your process more human and a support team excited to help you, getting started with us never been easier.</Text>
            </ContentBox>
            <ProjectsList>
                <li>
                    <ProjectsImage src={image1} alt="Image-1" />
                    <ProjectsTitle>Winery Dry Creek Building</ProjectsTitle>
                    <ProjectsText>Art Modern</ProjectsText>
                </li>
                <li>
                    <ProjectsImage src={image2} alt="Image-2" />
                    <ProjectsTitle>Creative Workplace Design</ProjectsTitle>
                    <ProjectsText>Minimalist</ProjectsText>
                </li>
                <li>
                    <ProjectsImage src={image3} alt="Image-3" />
                    <ProjectsTitle>Bedroom Interior Pot Work</ProjectsTitle>
                    <ProjectsText>Modern</ProjectsText>
                </li>
                <li>
                    <ProjectsImage src={image4} alt="Image-4" />
                    <ProjectsTitle>Light Ambience Sepia Design</ProjectsTitle>
                    <ProjectsText>Scandinavian</ProjectsText>
                </li>
            </ProjectsList>
        </ProjectsBox>
     )
}

  