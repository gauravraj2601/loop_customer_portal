import React from 'react';
import {
    Drawer,
    Button,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Image,
    Text,
    Box,
    Input,
    Stack,
    Flex,
} from '@chakra-ui/react';

const AddProductDrawer = ({isOpen, onClose }) => {

    const btnRef = React.useRef();
  return (
    <>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Add Product</DrawerHeader>

                    <DrawerBody>
                        <Stack spacing={4}>
                            <Box>
                                <Image
                                    src='https://cdn.shopify.com/s/files/1/0654/7079/1899/files/2.jpg?v=1721999630'
                                    alt='Guava electrolyte'
                                    borderRadius='md'
                                    mb={3}
                                />
                                <Text fontSize='lg' fontWeight='bold'>
                                    Guava electrolyte
                                </Text>
                                <Flex justifyContent='space-between'>
                                    <Text fontSize='lg' color='green.500'>
                                        $1.99
                                    </Text>
                                    <Text
                                        fontSize='lg'
                                        textDecoration='line-through'
                                        color='gray.500'
                                    >
                                        $11.00
                                    </Text>
                                </Flex>
                            </Box>

                            <Box>
                                <Text fontSize='md' mb={2}>
                                    Quantity
                                </Text>
                                <Input
                                    type='number'
                                    defaultValue='1'
                                    w='60px'
                                    textAlign='center'
                                />
                            </Box>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='green'>Add to Cart</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
  )
}

export default AddProductDrawer