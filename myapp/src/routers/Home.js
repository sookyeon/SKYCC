import React from 'react';
import styled from 'styled-components';
import ImageCard from '../components/ImageCard';
import HorizontalCard from '../components/HorizontalCard';
import Man from '../img/memoji-man.png';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h2`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 64px;
  color: #000000;
`;

const Title2 = styled.h2`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 64px;
  color: #000000;
`

const Image = styled.img`
  /* styles for the image */
`;

const Subtitle = styled.h3`
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
/* or 184% */

text-align: center;

color: #000000;
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
      <Title>멜로우 님, 코코아에 오신 걸 환영해요</Title>
      <Image src={Man} alt='미모지 남자' width='240'/>
      <Subtitle>달콤함을 위한 혁신을 이루어나가는<br/> 코코아 팀의 여정을 멜로우 님과 함께하게 되어 기뻐요</Subtitle>
    </HomeContainer>
    <CardContainer>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
    </CardContainer>
    <Title2>우리가 일하는 방식은</Title2>
    <HorizontalCard/>
    <HorizontalCard/>
</div>
  );
}

export default Home;
