import React from "react";
import { Box } from "@chakra-ui/react";
import OrderStatus from "./OrderStatus";
import TryAllProducts from "./TryAllProducts";
import Crousel from "./Crousel";
const Container = () => {
  return (
    <Box w={["95%", "95%", "90%", "72%"]} pb={"200px"} m={"auto"} bg={"#e3df9c"} pl={"15px"}>
        <OrderStatus />
        <TryAllProducts />
        <Crousel />
    </Box>
  );
};

export default Container;

