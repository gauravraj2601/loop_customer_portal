import React from "react";
import {
  Box,
  Stack,
  Text,
  Container,
  Image,
} from "@chakra-ui/react";

import welcomeBeer from "../../Assets/welcomeLoop.svg"

export default function Banner() {
  const font = {
    "font-family": "Lilita One", 
    "font-weight": 400,
    "font-style": "normal"
  }

  
  const card = 
    {
      title: "Loop Wellness Club",
      text: "Welcome, Abel",
      image:"https://cdn.shopify.com/s/files/1/0654/7079/1899/files/Group_138.png?v=1722002223"
}


  return (
    <Box
    bg={'gray.50'}
    name="test1"
    pt={16}
      position={"relative"}
      height={"100%"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />


          <Box
            // my={[10,20]}
            height={["265px","265px","365px"]}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundBlendMode={'lighten'}
            backgroundSize={['cover']}
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container align={'center'} size="container.lg" height={["250px","750px"]} position="relative">
              <Stack
                spacing={["2px", "2px", "2px"]}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top={["60%","18%","10%"]}
                transform="translate(0, -50%)"
              >
                <Text
                fontFamily={'system-ui'}
                color="gray.100"
                fontWeight={500}
                mb={["20px", "20px","0"]}
                fontSize={"32px"}
                >
                  {card.title}
                </Text>
                <Text
                 fontFamily={'Lilita One'}
                 fontStyle={font}
                 fontWeight={'bold'}
                  color="gray.100"
                  fontSize={{ base: "32px", md: "40px", lg: "40px" }}
                  style={{
                    textShadow: '0px 4px 19.6px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  {card.text}
                </Text>
                
              </Stack>
              <Image width={"355px"} pt={40}  display={['none','none', "block"]} src={welcomeBeer}/>
            </Container>
            
          </Box>



    </Box>
  );
}