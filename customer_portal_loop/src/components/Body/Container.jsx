import React from "react";

import { Box } from '@chakra-ui/react'

import OrderStatus from "./OrderStatus";
import TryAllProducts from "./TryAllProducts";
import Crousel from "../Crousel";
import SavingPlan from "./SavingPlan";
import BonousBanner from "./BonousBanner";
import AddProductDrawer from "../ProductDrawer";
const Container = () => {
  return (
    <Box w={["95%", "95%", "90%", "72%"]}  m={"auto"} pl={"15px"}>
        <OrderStatus />
        <TryAllProducts />
        <AddProductDrawer />
        <Crousel />
        <SavingPlan />
        <BonousBanner />
    </Box>
  );
};

export default Container;

