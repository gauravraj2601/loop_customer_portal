import React from 'react'
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
    Text
  } from '@chakra-ui/react'
export const DrawerButton = ({history,order, orderSummary}) => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()
      
        return (
          <>
            <Button ref={btnRef} 
            colorScheme='darkgreen' 
            borderRadius={"15px"} 
            fontWeight={"400"} 
            color='"#1b4e1f"' 
            variant={'outline'}  
            onClick={onOpen}
            _hover={{
                bg: "white",  
                color: "yellow", 
                backgroundColor:"#1b4e1f",
                fontWeight:"400"

              }}
            >
              {history}
            </Button>
            <Drawer 
            
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent backgroundColor={'#fbfccf'}>
                <DrawerCloseButton />
                <DrawerHeader color={'green'}>{order}</DrawerHeader>
                <hr  />
                <DrawerBody >
                  <Text color={'green'}>{orderSummary}</Text>
                </DrawerBody>
      
                <DrawerFooter>
                  <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme='green'>Search</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
        )
      }