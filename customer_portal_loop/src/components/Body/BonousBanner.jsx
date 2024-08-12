import React from "react";
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  Avatar,
  Image,
  Button,
} from "@chakra-ui/react";
import { FcOnlineSupport } from "react-icons/fc";

const BonousBanner = () => {
  return (
    <>
      <Box
        backgroundColor={"#f4df5d"}
        borderRadius={40}
        p={5}
        border={"1px solid"}
        mt={"75px"}
      >
        <Stack direction={{ base: "column", lg: "row" }}>
          <Flex justifyContent={"space-between"}>
            <Box mt={6}>
              <Heading
                color={"#1a541e"}
                mb={5}
                fontSize={{base:"28px", sm: "44px", md: "66px" }}
                fontFamily={"Lilita One"}
                textAlign={{ sm: "middle", md: "start" }}
              >
                Wellness Bonus
              </Heading>
            </Box>
            <Image
              w={{ base:"80px", sm: "100px", md: "120px" }}
              src="https://cdn.shopify.com/s/files/1/0654/7079/1899/files/wellness_bonus_icon_stamp_1.svg?v=1721371853"
            />
          </Flex>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"20px"} mt={5}>
            {stats.map((el, index) => (
              <Flex key={index+1}>
                {el.icon !== "" ? (
                  <Image w="60px" src={el.icon} />
                ) : (
                  <Avatar icon={<FcOnlineSupport />} />
                )}

                <Text
                  align={"left"}
                  ml={2}
                  fontWeight={"semibold"}
                  fontSize={"22px"}
                  color={"#1a541e"}
                  _hover={{
                    cursor: "pointer",
                    textDecor: "underline",
                  }}
                >
                  {el.content}
                </Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
      <Button
      w={"200px"}
      h={"45px"}
        colorScheme="darkgreen"
        borderRadius={"15px"}
        fontWeight={"500"}
        color='"#1b4e1f"'
        variant={"outline"}
        mt={"45px"}
        _hover={{
          color: "yellow",
          backgroundColor: "#1b4e1f",
          fontWeight: "400",
        }}
      >
        Pause subscription
      </Button>
      <Text fontSize={"18px"} fontWeight={"700"}
            textDecor={"underline"}
            mt={3}
        
      >Cancle Subscription</Text>
    </>
  );
};

export default BonousBanner;

const stats = [
  {
    title: "FcMoneyTransfer",
    content: <>40% off on your first order</>,
    icon: "https://cdn.shopify.com/s/files/1/0654/7079/1899/files/wellness_bonus_icon_01.svg?v=1721371642",
  },
  {
    title: "FcInTransit",
    content: <>A gift after 2 orders</>,
    icon: "https://cdn.shopify.com/s/files/1/0654/7079/1899/files/wellness_bonus_icon_04.svg?v=1721371731",
  },
  {
    title: "FcSelfie ",
    content: <>20% off on your next orders</>,
    icon: "https://cdn.shopify.com/s/files/1/0654/7079/1899/files/wellness_bonus_icon_02.svg?v=1721371670",
  },
  {
    title: "FcBinoculars ",
    content: <>Sneak peek into our new product launches</>,
    icon: "https://cdn.shopify.com/s/files/1/0654/7079/1899/files/wellness_bonus_icon_05.svg?v=1721371760",
  },
  {
    title: "FcOnlineSupport ",
    content: <>Free consultation with our nutrition expert</>,
    icon: "https://cdn.shopify.com/s/files/1/0654/7079/1899/files/wellness_bonus_icon_03.svg?v=1721371700",
  },
  {
    title: "FcCloseUpMode",
    content: <>Unlock VIP benefits on 8th order </>,
    icon: "https://cdn.shopify.com/s/files/1/0654/7079/1899/files/wellness_bonus_icon_06.svg?v=1721371785",
  },
];
