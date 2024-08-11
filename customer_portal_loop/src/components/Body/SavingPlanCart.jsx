import React from 'react'
import {
    Box,
    Button,
    Flex,
    Image,
    Text,
    VStack,
  } from "@chakra-ui/react";
const SavingPlanCart = ({image, name, price}) => {
  return (
    <Box p={5} rounded={20} border={"1px solid gray"} color={"#1b4e1f"}>
    <Flex gap={"18px"}>
      <VStack>
        <Image
          border={"1px solid black"}
          rounded={10}
          src={image}
          w={"100px"}
        />
        <Box
          w={"100px"}
          h={"20px"}
          bg={"#f3df5d"}
          mt={"-13px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"10px"}
        >
          1
        </Box>
      </VStack>
      <VStack w={"70%"} alignItems={"start"} gap={[null, "50%","40%","50%"]} >
        <Text fontWeight={"500"}>{name}</Text>
        <Text textDecoration={"line-through"}>${price}</Text>
      </VStack>
      <Flex w={"15%"} justifyContent={"end"} alignItems={"end"} >
        <Button
          w={"60px"}
          h={"28px"}
          bg={"#1b4e1f"}
          borderRadius={"15px"}
          color={"yellow"}
          fontWeight={"400"}
          fontSize={"12px"}
            _hover={{
                bg: "white",  
                color: "#1b4e1f", 
                border:"2px solid #1b4e1f",
                fontWeight:"500"

              }}
        >
          {" "}
          Edit
        </Button>
      </Flex>
    </Flex>
  </Box>
  )
}

export default SavingPlanCart