import React from "react"
import styled from "styled-components";
import { Link as LinkScroll } from 'react-scroll'
import Link from "react-scroll/modules/components/Link";

const Section = styled.div`
    height: 15rem;
    display: flex;
    justify-content: space-between;
`;

const MainTitleContainer = styled.div`
    height: 10rem;
    width: 18rem;
    text-align: left;
    padding-top: 1.3rem;
`;

const TitleContainer = styled.div`
    height: 6rem;
    width: 37rem;
    text-align: left;
    padding-top: 3.2rem;
    letter-spacing: -0.03em;
    color: #57675A;
`;

const Container = styled.div`
    width: ${props => props.width || "100%"};
    padding: 5rem 0 5rem 0;
`;

const FlexContainer = styled.div`
    display: flex;
    gap: 8rem;
    justify-content: ${props => props.space};
    padding: 2rem 0 2rem 0;
    > * {
        color: ${props => props.green}
    }
`;

const Item = styled.div``;

const ItemTitle = styled.p`
    color: #134612;
    font-weight: 600;
    padding-bottom: 0.7rem;
`;

const ImageContainer = styled.div`
    height: 30rem;
    width: 100%;
    background-color: #C4C4C4;
`;

const SubTitle = styled.div`
    width: 100rem;
    color: #57675A;
    > * {
        font-weight: 400;
    }
`;

const ButtonContainer = styled.div`
    color: #134612;

`;

function Project () {
    return (
        <div>
            <Section>
                <MainTitleContainer>
                    <h1>Node Gallery.</h1>
                </MainTitleContainer>
                <TitleContainer title>
                    <h2>AI generated artworks inspired by contemporary abstract works.</h2>
                </TitleContainer>
            </Section>
            <Container width="50rem">
                <p>Node Gallery is reimagining modern art through the blockchain, using custom built artificial intelegence to generate artwork through the non-objective artistic elements of shape, form, colour and line. The result is </p>
            </Container>
            <Container>
                <FlexContainer>
                    <Item>
                        <ItemTitle>
                            Date
                        </ItemTitle>
                        <p>October 2021</p>
                    </Item>
                    <Item>
                        <ItemTitle>
                            Type
                        </ItemTitle>
                        <p>Crypto</p>
                    </Item>
                    <Item>
                        <ItemTitle>
                            Project
                        </ItemTitle>
                        <p>Web UI/UX</p>
                    </Item>
                    <Item>
                        <ItemTitle>
                            Collaborators
                        </ItemTitle>
                        <p>Andrew Frankish</p>
                    </Item>
                    <Item>
                        <ItemTitle>
                            Applications
                        </ItemTitle>
                        <p>Figma, Sketch</p>
                    </Item>
                </FlexContainer>
            </Container>
            <ImageContainer></ImageContainer>
            <Container>
                <FlexContainer>
                    <SubTitle>
                        <h3>AI generated artworks inspired by contemporary abstract works.</h3>
                    </SubTitle>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh quisque felis, facilisis eget donec dictumst. Sem enim turpis odio vitae egestas. Integer non consectetur varius praesent nisl. Tempor fringilla sit viverra tincidunt nec. Nam euismod netus sit neque, faucibus. Sit at mi, velit eget praesent id feugiat amet eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh quisque felis, facilisis eget donec dictumst. Sem enim turpis odio vitae egestas. </p>
                </FlexContainer>
            </Container>
            <ImageContainer></ImageContainer>
            <Container>
                <FlexContainer space="space-between" green="#134612">
                    <ButtonContainer>
                        <h2>Next Project,</h2>
                        <h2>Previous Project.</h2>
                    </ButtonContainer>
                    <Link to="top" smooth={true} duration={500}>
                        <h2>Back to top.</h2>
                    </Link>
                </FlexContainer>
            </Container>
            <Container>
                <p>© Dougal Hallifax ⏤ 2022</p>
            </Container>
        </div>
    )
};

export default Project