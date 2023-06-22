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

  return (
    <Wrap spacing='30px' justify='center' minHeight='100vh'>
      {loading ? <p>loading</p> : error  ? <p>error</p> : product && <p>product</p>} 
    </Wrap>
  );
}