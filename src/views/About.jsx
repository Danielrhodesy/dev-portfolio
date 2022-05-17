import React from "react"
import styled from "styled-components";

const Section = styled.div`
    height: ${props => props.about ? "20rem" : "15rem"};
    display: flex;
    justify-content: space-between;
    padding-bottom: ${props => props.bottom ? "5rem" : "0"};
`;

const MainTitleContainer = styled.div`
    height: 10rem;
    width: 23rem;
    text-align: left;
    padding-top: 1.3rem;
`;

const TextContainer = styled.div`
    height: 6rem;
    width: 37rem;
    text-align: left;
    padding-top: ${props => props.title ? "3.2rem" : "0"};
    letter-spacing: -0.03em;
    color: ${props => props.text ? "black" : "#57675A"};
`;

const UnderlineTitle = styled.span`
    text-decoration: underline;
`;

const Title = styled.h2``;

const Skills = styled.div`
    height: 20rem;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem 8rem;
`;

const SkillSpan = styled.span`
    width: 7rem;
`;

const Skill = styled.h3`
    color: #57675A;
    font-weight: 400
`;

const skills = ["UI/UX Design", "Concepting & Ideation", "Wireframing", "User Flow", " Prototyping", "User Research", "Usability Testing", " Information Architecture"] 

function About() {
    return (
    <div>
        <Section>
            <MainTitleContainer>
                <h1>Hello, I'm Dougal Hallifax.</h1>
            </MainTitleContainer>
            <TextContainer title>
                <h2>UI/UX Designer based in Christchurch, New Zealand. <UnderlineTitle>Avaliable</UnderlineTitle> for freelance.</h2>
            </TextContainer>
        </Section>
        <Section about>
            <Title>About Me</Title>
            <TextContainer text>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh quisque felis, facilisis eget donec dictumst. Sem enim turpis odio vitae egestas. Integer non consectetur varius praesent nisl. Tempor fringilla sit viverra tincidunt nec. Nam euismod netus sit neque, faucibus. Sit at mi, velit eget praesent id feugiat amet eleifend.
                </p>
            </TextContainer>
        </Section>
        <Section about bottom>
            <Title>Capabilties</Title>
            <TextContainer text>
                <Skills>
                {
                    skills.map(skills => {
                        return(
                            <SkillSpan>
                                <Skill>
                                    {skills}
                                </Skill>
                            </SkillSpan>
                        )
                    })
                }
                </Skills>
            </TextContainer>
        </Section>
    </div>
    )
};

export default About