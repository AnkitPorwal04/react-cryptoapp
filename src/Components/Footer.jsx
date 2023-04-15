import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import avtarsrc from "../assets/ankit.jpg"

const Footer = () => {
  return (
    <Box 
      bgColor={"blue.900"} 
      color={"whiteAlpha.900"} 
      minH={"48"} 
      px={'16'} 
      py={['16', '8']}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={'full'} alignItems={["center", "flex-start"]}>

          <Text fontWeight={'bold'}>About Us</Text>
          <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center", "left"]}>We are the best crypto trading app in India, we provide our guidance at a very reasonable price.</Text>

        </VStack>
        <VStack>
          <Avatar boxSize={"28"} mt={['4', '0']} src={avtarsrc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  )
}

export default Footer