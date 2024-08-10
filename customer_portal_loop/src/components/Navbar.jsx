import { React } from "react";
import {
  Box,
  Flex,
  //   Link,
  // Button,
  // useColorModeValue,
  Stack,
  // useColorMode,
  useDisclosure,
  HStack,
  IconButton,
  Image,
  Button,
  DrawerBody,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
} from "@chakra-ui/react";
import {  CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import loopLogo from "../Assets/loop.webp"
import { Link } from "react-scroll";
import NavLink from './NavLink';
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg"; 

const links = [
  { name: `Shop Subscription `, id: "sel1" },
  { name: "Bundles", id: "sel2" },
  { name: "Manage Subscriptions", id: "sel3" },
  { name: "Recharge Alternative", id: "sel4" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box position={"fixed"} w={"full"} zIndex={2} bg={"#f3f3f3"} px={4} fontFamily={"inherit"}>
        <Flex h={16} w={"80%"} m={"auto"} alignItems={"center"} justifyContent={"space-between"}>
          <Flex gap={{base: "none",md:"200px" ,lg: "32px"}}>
          <IconButton
            size={"md"}
            icon={isOpen ? null : <RxHamburgerMenu size={28}/>}
            aria-label={"Open Ham"}
            hideFrom={"999px"}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={4} alignItems={"center"} >
            <Link
              activeClass="active"
              className="sel0"
              // to="test1"
              spy={true}
              smooth={true}
              duration={500}
              offset={50}
              
            >
              {
                <Image
                  src={
                    loopLogo
                  }
                  m={"auto"}
                  w={20}
                  mt={3}
                  display={{base:"none", md:"block"}}
                />
              }
            </Link>
          </HStack>
          <HStack as={"nav"}  spacing={4} hideBelow={"1000px"} >
            {links.map((link, i) => (
              <NavLink
                key={i}
                to={link.id}
                name={link.name}
                fontSize={15}
                onClick={() => onClose()}
              />
            ))}
          </HStack>
          </Flex>


          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
                <CiSearch fontSize={"24"} />
                <IoPersonOutline fontSize={"24"} />
                <CgShoppingBag fontSize={"24"} />
              
            </Stack>
          </Flex>
        </Flex>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}  
        zIndex={1}
        bg={"red"}
      >
        <DrawerOverlay />
        <DrawerContent mt={16} maxH="40vh">
          <DrawerCloseButton size={20} />
          <DrawerBody mt={-10}>
          <Stack as={"nav"} mt={16} spacing={4} alignItems="start" fontSize={20} >
            {links.map((link, i) => (
              <NavLink
                key={i}
                to={link.id}
                name={link.name}
                w="md"
                onClick={() => onClose() }
              />
            ))}
          </Stack>  
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
