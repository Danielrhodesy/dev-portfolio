import React from "react"
import styled from "styled-components";
import Content from "./Content";
import * as Scroll from 'react-scroll';
import { Link as LinkScroll } from 'react-scroll'
import { Link } from "react-router-dom"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ArrowImg from '../images/arrow.png'
import { devices } from "../tokens/breakpointSizes";

const Section = styled.div`
    position: relative;
    height: 34rem;
    display: flex;
    justify-content: space-between;


    @media ${devices.laptop} {
        height: 34rem;
    }
    
      @media ${devices.desktop} {
        height: 54rem;
    }
    
`;

const MainTitleContainer = styled.div`
    height: 10rem;
    width: 23rem;
    text-align: left;
    padding-top: 1.3rem;
`;

const SubTitleContainer = styled.div`
    height: 6rem;
    width: 37rem;
    text-align: left;
    padding-top: 3.2rem;
    letter-spacing: -0.03em;
    color: #57675A;
`;

const UnderlineTitle = styled.span`
    text-decoration: underline;
`;

const ProfileContainer = styled.div`
    background-color: white;
    position: absolute;
    height: 485px;
    width: 418px;
    left: 70%;
    z-index: -1;
`;

const ArrowContainer = styled.div`
    height: 3rem;
    width: 3rem;
    maring: 0;
    margin-bottom: 5rem;
`;

const Arrow = styled.img`
    height: 3rem;
    width: 3rem;
`;

const LinkContainer = {
    color: "black",
    textDecoration: "none",
}

function HomePage() {
    return (
        <div>
            <Section>
                <MainTitleContainer>
                    <h1>Hello, I'm Dougal Hallifax.</h1>
                </MainTitleContainer>
                <SubTitleContainer>
                    <h2>UI/UX Designer based in Christchurch, New Zealand. <UnderlineTitle>Avaliable</UnderlineTitle> for freelance.</h2>
                </SubTitleContainer>
                <ProfileContainer>
                </ProfileContainer>
            </Section>
            <ArrowContainer>
                <LinkScroll to="content" smooth={true} duration={500}>
                    <Arrow src={ArrowImg} />
                </LinkScroll>
            </ArrowContainer>
            <Link to="project" style={LinkContainer}>
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                    <Content id="content"/>
                </AnimationOnScroll>
            </Link>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                <Content />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                <Content />
            </AnimationOnScroll>
        </div>
    )
};

export default HomePage