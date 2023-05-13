import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MultiRadio from '../components/MultiRadio';
import { Textarea, Button, Select, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import Man from '../img/memoji-man.png';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title2 = styled.h2`
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 32px;
color: #000000;
margin-top: 48px;
text-align: center;
`;

const Image = styled.img`
`;

const Subtitle = styled.h3`
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 700;
font-size: 18px;
margin-top: 24px;
margin-bottom: 16px;
`;

const Mate = () => {
  const [selectedRadio, setSelectedRadio] = useState("");
  const handleRadioChange = (value) => setSelectedRadio(value);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://imgh.o-r.kr', {
        radio: selectedRadio,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
    <HomeContainer>
        <Image src={Man} width='120px' display='flex' justify-content = 'center'
 align-items= 'center'/> 
        <Title2>코코아팀은 멜로우님이 원활하게 적응하실 수 있도록<br/>
입사 시 메이트를 매칭해드리고 있어요</Title2>
    </HomeContainer>
    <Subtitle>직무를 선택해주세요</Subtitle>
    <Select placeholder='직무 선택하기'>
      <option value='option1'>프로덕트 디자이너</option>
      <option value='option2'>프론트엔드 개발자</option>
      <option value='option3'>백엔드 개발자</option>
    </Select>
    <Subtitle>직함을 선택해주세요</Subtitle>
    <Select placeholder='직함 선택하기'>
      <option value='option1'>리드</option>
      <option value='option2'>팀원</option>
      <option value='option3'>신입</option>
    </Select>
    <Subtitle>성별을 선택해주세요</Subtitle>
    <RadioGroup onChange={handleRadioChange}>
        <Stack direction='row'>
          <Radio value='1'>남성</Radio>
          <Radio value='2'>여성</Radio>
        </Stack>
      </RadioGroup>
    <Subtitle>메이트와 가장 하고싶은 일이 무엇인가요?</Subtitle>
    <MultiRadio/>
    <Subtitle>메이트에게 전하고 싶은 말을 남겨주세요</Subtitle>
    <Textarea placeholder='인삿말이나 궁금한 점을 모두 남겨주세요!' />
    <Button colorScheme='blue' onClick={handleSubmit}>메이트 신청하기</Button>
  </div>
  );
}

export default Mate;
