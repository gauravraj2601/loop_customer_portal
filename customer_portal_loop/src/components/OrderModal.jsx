import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";

const OrderModal = ({isOpen,  onClose}) => {
   
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent mt={"20%"} >
            <ModalHeader>Order</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Upcoming order : September 22, 2024</Text>
            </ModalBody>
  
            <ModalFooter>
              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="red" ml={3}>
                Confirm
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  

export default OrderModal