import React from "react";
import { Stack, Text, Button } from "@chakra-ui/react";
import cloud from "../../Assets/cloud.svg";
const TryAllProducts = () => {
 
  return (
    <Stack
      p="6"
      h={["240px", "240px" ,"225px"]}
      boxShadow="lg"
      borderRadius="28px"
      backgroundPosition="center"
        backgroundRepeat="no-repeat"
      bgImage={cloud}
      mt={"55px"}
      border={"1px solid"}
    >
      <Stack direction="row">
        <Text
          color={"gray.100"}
          fontSize={["35px","38px","45px","45px"]}
          fontFamily={"Lilita One"}
         
        >
          Try something new!
        </Text>
      </Stack>
        <Text
          textAlign={"left"}
          maxW={"4xl"}
          color={"gray.100"}
          fontSize={"20px"}
          mt={"-10px"}
        >
          Rehydrate and replenish with our newly launched electrolytes
        </Text>
      <Button
        w={"166px"}
        h={"41px"}
        p={["10px", "20px"]}
        variant={"outline"}
        align={"left"}
        fontFamily={"arial"}
        fontSize={"18px"}
        fontWeight={"300"}
        bg={"#D4F88A"}
        rounded={"20px"}
        mt={["16px" ,"16px" ,"16px" ,"30px"]}
      >
        See all products
      </Button>
    </Stack>
  );
};

export default TryAllProducts;
