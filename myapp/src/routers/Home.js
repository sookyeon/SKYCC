import React from 'react';
import styled from 'styled-components';
import { Card, CardHeader, CardBody, Heading, Text,  Stack } from '@chakra-ui/react'
import HorizontalCard from '../components/HorizontalCard';
import Man from '../img/memoji-man.png';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding : 1rem;
`;

const Title = styled.h2`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 64px;
  color: #000000;
  text-align : center;
`;

const Title2 = styled.h2`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 64px;
  color: #000000;
  margin-top: 48px;
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
    <Card maxW='sm'>
    <CardBody>
      <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>음료를 간편하게</Heading>
        <Text>
        코코아 크루는 우리의 일상을 더 좋게 만들고 싶은 멋진 동료입니다. 다양한 생각을 자유롭게 나누며, 언제나 놀라운 결과를 만들어내죠.
        </Text>
      </Stack>
    </CardBody>
  </Card>
  <Card maxW='sm'>
    <CardBody>
      <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>시음을 모두에게</Heading>
        <Text>
        카카오 크루는 우리의 일상을 더 좋게 만들고 싶은 멋진 동료입니다. 다양한 생각을 자유롭게 나누며, 언제나 놀라운 결과를 만들어내죠.
        </Text>
      </Stack>
    </CardBody>
  </Card>
    </CardContainer>
    <Title2>우리가 일하는 방식은</Title2>
    <HorizontalCard/>
    <HorizontalCard/>
</div>
  );
}

export default Home;
