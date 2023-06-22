import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, Wrap, Stack, Spinner, Alert, AlertIcon, AlertDescription, AlertTitle, Flex, Badge, Heading, HStack, Button, SimpleGrid, useToast } from '@chakra-ui/react';
import { MinusIcon, StarIcon, SmallAddIcon } from '@chakra-ui/icons';
import { BiPackage, BiCheckShield, BiSupport } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/actions/productActions';
import { addCartItem } from '../redux/actions/cartActions';


export default function ProductScreen(){
  const [ amount, setAmount ] = useState(1);
  let { id } = useParams();
  const toast = useToast();
  //redux
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const { loading, error, product } = products;

  const cartContent = useSelector(state => state.cart);
  const { cart } = cartContent;

  useEffect(()=>{
    dispatch(getProduct(id));
  }, [dispatch, id, cart]);

  const changeAmount = (input) => {
    if (input === 'plus' && amount < product.stock) {
      setAmount(amount + 1);
    }
    if (input === 'minus' && amount > 1) {
      setAmount(amount - 1);
    }
  }

  return (
    <Wrap spacing='30px' justify='center' minHeight='100vh'>
      {loading ? (
      <Stack direction='row' spacing={4}>
        <Spinner mt={20} thickness='2px' speed='0.65s' emptyColor='gray.200' color='orange.500' size='xl' />
      </Stack>
       ) : error  ? (
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle>We are sorry!</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert> 
        ) : (
      product && 
      <Box maxW={{base: '3xl', lg: '5xl'}} mx='auto' px={{base: '4', md: '8', lg: '12'}} py={{base: '6', md: '8', lg: '12'}}>
        <Stack direction={{base: 'column', lg: 'row'}} align={{lg: 'flex-start'}}>
          <Stack pr={{base: '0', md: '12'}} spacing={{base: '8', md: '4'}} flex='1.5' mb={{base: '12', md: 'none'}}>
            {product.productIsNew && (
            <Badge rounded='full' w='40px' fontSize='0.8em' colorScheme='green'>
              New
            </Badge>
            )}
            <Heading fontSize='2xl' fontWeight='extrabold'>
              {product.name}
            </Heading>
            <Stack spacing='5'>
              <Box>
                <Text fontSize='xl'>$ {product.price}</Text>
                <Flex>
                  <HStack spacing='2px'>
                    <StarIcon color='orange.500' />
                    <StarIcon color={product.rating >= 2 ? 'orange.500' : 'gray.200'} />
                    <StarIcon color={product.rating >= 3 ? 'orange.500' : 'gray.200'} />
                    <StarIcon color={product.rating >= 4 ? 'orange.500' : 'gray.200'} />
                    <StarIcon color={product.rating >= 5 ? 'orange.500' : 'gray.200'} />
                  </HStack>
                  <Text fontSize='md' fontWeight='bold' ml='4px'>
                    {product.numberOfReviews} Reviews
                  </Text>
                </Flex>
              </Box>
              <Text>{product.description}</Text>
              <Text fontWeight={'bold'}>Quantity</Text>
              <Flex w='170px' p='5px' border='1px' borderColor='gray.200' alignItems='center'>
                <Button disabled={amount <= 1} onClick={()=>changeAmount('minus')} style={{ cursor: amount <= 1 ? 'not-allowed' : 'default' }}>
                  <MinusIcon />
                </Button>
                <Text mx='30px'>{amount}</Text>
                <Button disabled={amount >= product.stock} onClick={()=>changeAmount('plus')} style={{ cursor: amount >= product.stock ? 'not-allowed' : 'default' }}>
                  <SmallAddIcon w='20px' h='25px' />
                </Button>
              </Flex>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      )} 
    </Wrap>
  );
}