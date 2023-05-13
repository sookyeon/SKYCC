import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React from 'react';

function MultiRadio() {
    const [value, setValue] = React.useState('1')
    return (
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction='column'>
          <Radio value='1'>선택지1</Radio>
          <Radio value='2'>선택지2</Radio>
          <Radio value='3'>선택지3</Radio>
          <Radio value='4'>선택지4</Radio>
        </Stack>
      </RadioGroup>
    )
  }

  export default MultiRadio;