import React from 'react'
import {
    Box,
    Heading,
    Text,
    Button,
    Stack,

  } from '@chakra-ui/react'
const SubscriptionBanner = () => {
  return (
    <Box w={"full"} bgColor={'#7439fe'} mt={"30px"} >
    <Box w={["95%", "95%", "90%", "72%"]} m={"auto"}  bgColor={'#7439fe'} py={4}  >
    <Text fontWeight={"500"} color={"gray.300"} >Rated ⭐️⭐️⭐️⭐️⭐️ on Shopify App Store </Text>
    <Stack 
      textAlign={'center'}
      spacing={{ base: 8, md: 14 }}
      >
      <Heading
        fontWeight={'bold'}
        fontFamily={"Lilita One"}
        fontSize={{ base: '30px', sm: '35px',md:"40px"}}
        lineHeight={'110%'}
        color={'white'}
        mt={"10px"}
        >
        This store is powered by Loop subscriptions!<br />
      </Heading>
      <Text color={'gray.100'} fontSize={'17px'}>
    
Turn your customers into subscribers and drive recurring revenue for your DTC brand.
      </Text>
      
        <Button
        w={"150px"}
        m={"auto"}
          color={'gray.100'}
          bg={'#200f46'}
        //   rounded={'full'}
          p={6}
          _hover={{
            bg: '#5d3296',
          }}>
          Book a Demo
        </Button>
     
    </Stack>
  </Box>
  </Box>
  )
}

export default SubscriptionBanner