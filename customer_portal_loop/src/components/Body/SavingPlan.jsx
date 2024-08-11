import React from "react";
import { DrawerButton } from "../Drawer";
import {
  Box,
  Button,
  Flex,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import SavingPlanCart from "./SavingPlanCart";

const SavingPlan = () => {
  return (
    <>
      <Box
        border={"1px solid "}
        w={"100%"}
        margin={"auto"}
        mt={"10px"}
        my={4}
      ></Box>
      <Flex
        justifyContent={"space-between"}
        color={"#1b4e1f"}
        fontWeight={"500"}
      >
        <Text fontSize={"larger"}>Saving plan details</Text>
        <Flex gap={"15px"}>
          <DrawerButton history={"Upcoming orders"} order={"Upcoming Order"} orderSummary={"No Upcoming Orders"} />
          <DrawerButton history={"Order history"} order={"Past order"} orderSummary={"No Past Orders"}/>
        </Flex>
      </Flex>

      <SimpleGrid columns={[1, null, 2]} spacing="10px" mt={"20px"}>
        <SavingPlanCart
          image={
            "https://cdn.shopify.com/s/files/1/0654/7079/1899/files/8.jpg?v=1721999780"
          }
          name={"Curacao electrolyte"}
          price={"13.99"}
        />

        <SavingPlanCart
          image={
            "https://cdn.shopify.com/s/files/1/0654/7079/1899/files/6.jpg?v=1721999553"
          }
          name={"Cocunut electrolyte"}
          price={"13.99"}
        />

        {/* /////// */}

        <Flex
          w={"full"}
          rounded={20}
          border={"1px solid gray"}
          p={4}
          textAlign={"start"}
          justifyContent={"space-between"}
        >
          <Text color={"#1b4e1f"} fontWeight={"500"} fontSize={"larger"}>
            Order notes
          </Text>
          <Button
            w={"45px"}
            h={"28px"}
            bg={"#1b4e1f"}
            color={"yellow"}
            fontWeight={"400"}
            borderRadius={"15px"}
            mt={"6%"}
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

        <VStack
          w={"full"}
          rounded={20}
          border={"1px solid gray"}
          justifyContent={"start"}
          alignItems={"start"}
          p={4}
          gap={"15px"}
        >
          <Text color={"#1b4e1f"} fontWeight={"500"} fontSize={"larger"}>
            Discount code
          </Text>
          <Flex w={"full"} gap={"2%"}>
            <Input
              placeholder="Discount code"
              w={"95%"}
              h={"30px"}
              bg={"white"}
              borderRadius={"20px"}
              pb={"2px"}
            />
            <Button
              w={"70px"}
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
              Apply
            </Button>
          </Flex>
        </VStack>

        <VStack
          w={"full"}
          rounded={20}
          border={"1px solid gray"}
          p={4}
          alignItems={"start"}
        >
          <Text color={"#1b4e1f"} fontWeight={"500"} fontSize={"larger"}>
            Subscription plan
          </Text>
          <Text
            color={"#1b4e1f"}
            fontWeight={"500"}
            fontSize={"16px"}
            mt={"-5px"}
          >
            Deliver every 1 month
          </Text>
        </VStack>

        <VStack
          w={"full"}
          rounded={20}
          border={"1px solid gray"}
          p={4}
          alignItems={"start"}
        >
          <Text color={"#1b4e1f"} fontWeight={"500"} fontSize={"larger"}>
            {" "}
            Shipping address
          </Text>
          <Text color={"#1b4e1f"} fontWeight={"500"} fontSize={"16px"}>
            Les
          </Text>
          <Text
            color={"#1b4e1f"}
            fontWeight={"500"}
            fontSize={"16px"}
            mt={"-12px"}
          >
            1100 Van Ness Avenue
          </Text>
          <Text
            color={"#1b4e1f"}
            fontWeight={"500"}
            fontSize={"16px"}
            mt={"-12px"}
          >
            San Francisco, California, 94109
          </Text>
          <Text
            color={"#1b4e1f"}
            fontWeight={"500"}
            fontSize={"16px"}
            mt={"-12px"}
          >
            United States
          </Text>
          <Flex gap={"5px"}>
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
            <Button 
                //  w={"60px"}
                 h={"28px"}
                 borderRadius={"15px"}
                 variant={"outline"}
                 border={"1px solid"}
                 pb={"4px"}
            >
                Change delivery method
            </Button>
          </Flex>
        </VStack>

        <VStack
          w={"full"}
          rounded={20}
          border={"1px solid gray"}
          p={4}
          alignItems={"start"}
        >
          <Text color={"#1b4e1f"} fontWeight={"500"} fontSize={"larger"}>
            {" "}
            Payment details
          </Text>
          <Text color={"#1b4e1f"} fontWeight={"500"} fontSize={"16px"}>
          Visa ending in 4242
          </Text>
          <Text
            color={"#1b4e1f"}
            fontWeight={"500"}
            fontSize={"16px"}
            mt={"-12px"}
          >
            Expires 2/29
          </Text>
          <Text
            color={"gray"}
            fontWeight={"500"}
            fontSize={"16px"}
            mt={"-12px"}
          >
            Last updated on: May 5, 2023
          </Text>
          <Flex gap={"5px"}>
          <Button
              w={"80px"}
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
              Update
            </Button>
            <Button 
                //  w={"60px"}
                 h={"28px"}
                 borderRadius={"15px"}
                 variant={"outline"}
                 border={"1px solid"}
                 pb={"4px"}
            >
                Change
            </Button>
          </Flex>
        </VStack>
        <Box></Box>
        <Box pl={"5px"} textAlign={"start"} >Last update mail sent on: July 24, 2024</Box>

      </SimpleGrid>
    </>
  );
};

export default SavingPlan;
