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
    useDisclosure,
    RadioGroup,
    Radio,
    Stack,
    Text,
} from '@chakra-ui/react';

export const DelaySubscriptionDrawer = ({isOpen, onClose }) => {
     const btnRef = React.useRef();
    const [value, setValue] = React.useState('7');

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                
            >
                <DrawerOverlay />
                <DrawerContent bg={"#dddca1"}>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottom={"2px solid gray"}>Delay Subscription</DrawerHeader>

                    <DrawerBody>
                        <Text mb={4}>
                            Please select by how many days you want to delay your next order:
                        </Text>
                        <RadioGroup onChange={setValue} value={value}>
                            <Stack spacing={4}>
                                <Radio value='7'>7 days</Radio>
                                <Radio value='15'>15 days</Radio>
                                <Radio value='30'>30 days</Radio>
                            </Stack>
                        </RadioGroup>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme='green'>Confirm</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};
