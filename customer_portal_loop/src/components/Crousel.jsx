import {
  Box,
  Center,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { beers } from "../db";

const Crousel = () => {
 

  
  return (
    <>
    <Flex h={"350px"}
     w={"100%"}
      overflowX={"auto"}
    //    bg={"yellow"}
        p={"20px"}
         mt={2}  
         sx={{
             "&::-webkit-scrollbar": {
            display: "none", // Hide the scrollbar
          },
         }}
         >
      {beers.length ? (
        beers.map((el) => {
          return (
            <Flex
              w="200px"
              h="280px"
            //   bg={"white"}
                ml={"-10px"}
              gap={"15px"}
              mr={"38px"}
              mt={"20px"}
            >
              <Stack
                w={"90%"}
                h={"240px"}
                mx={"2"}
                rounded={10}
                alignItems="start"
                color={"#1b4e1f"}
                
              >
                <Image
                  src={el.image}
                  fit={"contain"}
                  h={"160px"}
                  w={["360px", "420px", "500px"]}
                  borderRadius={"17px"}
                />
                <Box pl={"10px"}>
                  <Text fontSize={"15px"} fontWeight="500">
                    {el.title}
                  </Text>
                </Box>

                <Flex
                 pl={"11px"}
                  w={"170px"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  mt={"-5px"}
                >
                  <Flex gap={2} fontSize={"13px"} >
                    <Text>${el.offer}</Text>
                    <Text textDecoration={"line-through"}>${el.mrp}</Text>
                  </Flex>
                  <Box
                  w={"30px"}
                  h={"30px"}
                    bg="#1b4e1f"
                    borderRadius="50%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color={"white"}
                    fontSize={"25px"}
                  >
                   +
                  </Box>
                </Flex>
              </Stack>
            </Flex>
          );
        })
      ) : (
        <Center> NO PRODUCTS Loading....</Center>
      )}
    </Flex>
    </>
  );
};

export default Crousel;
