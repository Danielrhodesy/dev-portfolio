import React from "react"
import styled from "styled-components";

const SectionContainer = styled.section`
    padding-top: 5rem;
    width: 100%;
    height: 40rem;
`;

const HeadingContainer = styled.div`
    height: 10rem;
    display: flex;
    justify-content: space-between;
`;

const TitleContainer = styled.div``;

const Title = styled.h2`
    font-weight: 600;
`;

const Subtitle = styled.h4`
    margin: 0;
    padding-top: .5rem;
    font-size: 18px;
    font-weight: 200;
`;

const BlurbContainer = styled.div`
    width: 32rem;
    padding-right: 8rem;
`;

const ProjectLink = styled.div``;

const ImageContainer = styled.div`
    height: 25em;
    background-color: white;
`;

const Line = styled.div`
    margin-top: 4rem;
    height: 2px;
    width: 100%;
    background-color: black
`;

function Content() {
    return (
       <SectionContainer id="content">
           <HeadingContainer>
               <TitleContainer>
                   <Title>
                        Node Gallery
                   </Title>
                   <Subtitle>
                        SAAS DESIGN
                   </Subtitle>
               </TitleContainer>
               <BlurbContainer>
                   <h2>
                      AI generated artworks inspired by contemporary abstract works.
                   </h2>
                   <ProjectLink>
                       See project
                   </ProjectLink>
               </BlurbContainer>
           </HeadingContainer>
           <ImageContainer>

           </ImageContainer>
           <Line></Line>
       </SectionContainer>
    )
};

export default Content