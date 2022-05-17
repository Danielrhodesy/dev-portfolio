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

function Contact() {
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
        </div>
    )
};

export default Contact