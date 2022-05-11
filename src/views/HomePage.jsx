import React from "react"
import styled from "styled-components";
import DougPic from "../images/dougProfile.jpg"

const Section = styled.div`
    // background-color: #faf1b6;
    height: 40rem;
    width: 70%;
    padding: 0 15% 0 15%;
    display: flex;
    justify-content: space-between;
`;

const MainTitleContainer = styled.div`
    height: 10rem;
    width: 23rem;
    text-align: left;
    padding-top: 1.3rem;
`;

// const MainTitle = styled.h1`

// `;

const SubTitleContainer = styled.div`
    height: 6rem;
    width: 37rem;
    text-align: left;
    padding-top: 3.2rem;
    padding-right: 8.2rem;
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
    left: 60%;
    z-index: -1;
`;


function HomePage() {
    return (
        <div>
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
            </div>
        </div>
    )
};

export default HomePage