import React, { useState } from 'react';
import { Button, Flex, Heading, Stack, Text, useColorModeValue as mode, Badge } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link as ReactLink, useNavigate } from 'react-router-dom';

export default function CartOrderSummary(){
  const [ buttonLoading, setButtonLoading ] = useState();
  const standarShipping = Number(4.99).toFixed(2);
  const cartItems = useSelector( state => state.cart );
  const { subtotal } = cartItems;
  const navigate = useNavigate();

  const checkoutHandler = () => {
    setButtonLoading(true);
    navigate('/checkout');
  }

  return (
    <Stack spacing='8' borderWidth='1px' rounded='lg' padding='8' w='full'>
      <Heading size='md'>Order Summary</Heading>
      <Stack spacing='6'>
        <Flex justify='space-between'>
          <Text fontWeight='medium' color={mode('gray.600', 'gray.400')}>
            Subtotal
          </Text>
          <Text fontWeight='medium'>{subtotal}</Text>
        </Flex>
        <Flex justify='space-between'>
          <Text fontWeight='medium' color={mode('gray.600', 'gray.400')}>
            Shipping
          </Text>
          <Text fontWeight='medium'>
            {subtotal <= 1000 ? (
              standarShipping
            ) : (
              <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='green'>
                Free
              </Badge>
            )}
          </Text>
        </Flex>
        <Flex fontSize='lg' fontWeight='semibold'>
              {subtotal <= 1000 ? Number(subtotal) + Number(standarShipping) : subtotal}
        </Flex>
      </Stack>
      <Button as={ReactLink} to='/checkout' colorScheme='orange' size='lg' fontSize='md' rightIcon={<FaArrowRight />} isLoading={buttonLoading} onClick={()=> checkoutHandler()}>
        Checkout
      </Button>
    </Stack>
  );
}