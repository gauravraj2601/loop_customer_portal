import React from "react";
import { Box, Text } from "@chakra-ui/react";

const NavBanner = () => {
  return (
    <Box
      w={"full"}
      zIndex={1}
      height={["50px", "40px"]}
      bg={"#741bff"}
      textAlign={"center"}
      p={2}
    >
      <Text
        color={"gray.100"}
        fontWeight={"semibold"}
        fontSize={["sm", "md"]}
      >
        Welcome to Loop Subscription's demo store 🚀 𝘒𝘯𝘰𝘸 𝘮𝘰𝘳𝘦 𝘢𝘣𝘰𝘶𝘵 𝘓𝘰𝘰𝘱 →
      </Text>
    </Box>
  );
};

export default NavBanner;
