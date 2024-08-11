import React from 'react'
import { SlRefresh } from "react-icons/sl";
import { Box,Button ,Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react";

const OrderStatus = () => {
  return (
    <>
    <Box w={"full"} h={"160px"}>
        <Box>
          <VStack alignItems={"start"} pt={"30px"} pl={"15px"}>
            <HStack >
              <Text fontFamily={"inter"} fontWeight={"500"} fontSize={"24px"}>
                #11644207323
              </Text>
              <Box
                bg={"#00d27e"}
                fontWeight={"500"}
                w={"50px"}
                h={"22px"}
                display={"flex"}
                justifyContent={"center"}
                
                alignItems={"center"}
                fontSize={"13px"}
                borderRadius={20}
              >
                Active
              </Box>
            </HStack>
            <Text fontSize={"18px"}>
              {" "}
              <Text as={"span"} fontWeight={"bold"}>
                $21.54
              </Text>{" "}
              + $0 shipping
            </Text>
            <HStack fontSize={"18px"}>
              <SlRefresh size={"16px"} />
              <Text> Deliver every 1 month</Text>
            </HStack>
          </VStack>
        </Box>
      </Box>
      {/* Order Status */}
      <Box bgColor={"#f5f49c"} rounded={20} p={3} >
        <Stack>
          <Text
            color={"#1A541D"}
            align={"left"}
            fontSize={["18px" ,"22px", "26px"]}
            fontWeight={["600","700"]}
            ml={2}
          >
            <Text fontWeight={"500"} as={"span"}>
              Upcoming order :
            </Text>{" "}
            September 22, 2024
          </Text>

          <Flex justifyContent={"space-evenly"} 
                mt={5}
                >
            <Button
              rounded={"50"}
              fontSize={"17.5px"}
              fontWeight={"200"}
              fontFamily={"Arial"} 
              w={["140px", "150px", "200px","310px"]}
              h={"48px"}
              bg={"#1A541D"}
              color={"#C4FE34"}
              _hover={{
                bg: "#145A22",  // Background color on hover
                color: "#E0FF56",  // Text color on hover
              }}
            >
              Order Now
            </Button>
            <Button
              rounded={"50"}
              fontSize={"17.5px"}
              fontWeight={"200"}
              fontFamily={"Arial"}
              w={["140px", "150px", "200px","310px"]}
              h={"48px"}
             variant={"outline"}
             border={"1px solid"}
              _hover={{
                bg: "#145A22",  
                color: "#E0FF56",  
              }}
            >
              Skip
            </Button>
            <Button
              rounded={"50"}
              w={["140px", "150px", "200px","310px"]}
              h={"48px"}
              fontSize={"17.5px"}
              fontWeight={"200"}
              fontFamily={"Arial"}
              variant={"outline"}
             border={"1px solid"}
              _hover={{
                bg: "#145A22",  
                color: "#E0FF56",  
              }}
            >
              Postpone
            </Button>
          </Flex>
          <Text py={"4"} align={"left"}>
          Last order was charged on June 22, 2024
          </Text>
        </Stack>
      </Box>
    </>
  )
}

export default OrderStatus