import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalBody, Alert, AlertDescription, AlertTitle, AlertIcon, Wrap } from '@chakra-ui/react';

export default function PaymentErrorModal({isOpen, onClose}) {

  return (
    <>
    <Modal size='full' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Wrap justify='center' direction='column' align='center' mt='20px'>
            <Alert status='error' variant='subtle' flexDirection='column' alignItems='center' justifyContent='center' textAlign='center' height='auto'>
              <AlertIcon boxSize='55px' />
              <AlertTitle pt='8px' fontSize='xl'>Payment Failed !</AlertTitle>
              <AlertDescription>We couldn't process your payment.</AlertDescription>
            </Alert>
          </Wrap>
        </ModalBody>
      </ModalContent>
    </Modal>
    </>
  );
}