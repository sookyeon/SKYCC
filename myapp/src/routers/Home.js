import React from 'react';
import styled from 'styled-components';
import ImageCard from '../components/ImageCard';
import HorizontalCard from '../components/HorizontalCard';

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h2`
  /* styles for the title */
`;

const Image = styled.img`
  /* styles for the image */
`;

const Subtitle = styled.h3`
  /* styles for the subtitle */
`;

const CardContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 20px;
`

const Home = () => {
  return (
    <div>
    <HomeContainer>
      <Title>Home Page</Title>
      <Image src="path_to_your_image.jpg" alt="description of image" />
      <Subtitle>Welcome to the home page!</Subtitle>
    </HomeContainer>
    <CardContainer>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
    </CardContainer>
    <HorizontalCard/>
    <HorizontalCard/>
</div>
  );
}

export default Home;
