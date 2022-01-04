import { Box, Image, Badge, Divider } from '@chakra-ui/react';
import React from 'react';

export default function CardButton({ data, onClick }) {  
  return (
    <button onClick={e => e.currentTarget.focus()} className="cardButton">
      <Box p="2" maxW="sm" borderColor={'gray.500'} 
        borderWidth="1px" borderRadius="md" overflow="hidden" onClick={onClick} className="box"
      >
        <Image src={data.imageUrl} maxWidth={'80%'} margin="auto"/>
        <Box
          mt="1"
          p="2"
          fontWeight="bold"
          fontSize={22}
          as="h2"
        >
          {data.mode}
        </Box>
        <Divider pb="2"/>
        <Box p="2">
          <Box>
            <Badge borderRadius="none" colorScheme="teal">
              Best For
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="s"
            >
              {data.bestFor}
            </Box>
          </Box>
        </Box>
      </Box>
    </button>
  );
}