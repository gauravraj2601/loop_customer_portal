import React from 'react'
import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Tag,
    useColorModeValue,
    Image,
  } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box  bg={'#0d062b'} >
    <Box
      bg={'#0d062b'}
      w={["95%", "95%", "90%", "75%"]} m={"auto"}  pl={"15px"}
      color={{base:"gray.100" ,sm:"gray.100", md:"gray.200"}}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid w={"full"} ml={{ base: "10%", sm: "10%", md: "5%"}} columns={{ base: 1, sm: 2, md: 4 }} spacing={8} >
        <Stack align={'flex-start'}>
            <Text fontWeight={'600'} fontSize={'lg'} mb={2} >Product</Text>
            <Box {...box}>
              Overview
            </Box>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Box {...box}>
                Features
              </Box>
              <Tag
                size={'sm'}
                bg={useColorModeValue('green.300', 'green.800')}
                ml={2}
                color={'white'}>
                New
              </Tag>
              </Stack>
            <Box {...box}>
              Tutorials
            </Box>
            <Box {...box}>
              Pricing
            </Box>
            <Box {...box}>
              Releases
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>Company</Text>
            <Box {...box}>
              About Us
            </Box>
            <Box {...box}>
              Press
            </Box>
            <Box {...box}>
              Careers
            </Box>
            <Box {...box}>
              Contact Us
            </Box>
            <Box {...box}>
              Partners
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>Legal</Text>
            <Box {...box}>
              Cookies Policy
            </Box>
            <Box {...box}>
              Privacy Policy
            </Box>
            <Box {...box}>
              Terms of Service
            </Box>
            <Box {...box}>
              Law Enforcement
            </Box>
            <Box {...box}>
              Status
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>Follow Us</Text>
            <Box {...box}>
              Facebook
            </Box>
            <Box {...box}>
              Twitter
            </Box>
            <Box {...box}>
              Dribbble
            </Box>
            <Box {...box}>
              Instagram
            </Box>
            <Box {...box}>
              LinkedIn
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Image w={"100px"} m={"auto"} mb={"20px"} src='https://demo.loopwork.co/cdn/shop/files/Vector.png?v=1707344688&width=60' />
        <Box border={"1px solid gray"} ></Box>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2024 LOOP. All rights reserved
        </Text>
      </Box>
    </Box>
    </Box>
  )
}

export default Footer

const box = {
  as: "a",
  href: "#",
  color:"gray.400",
  _hover: {
    textDecoration: "underline",
  },
};
