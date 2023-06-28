import React, { useState, useEffect } from "react";
import { Box, Button, Checkbox, Container, FormControl, Heading, HStack, Stack, Text, useBreakpointValue, useColorModeValue, Alert, AlertIcon, AlertTitle, AlertDescription, useToast } from '@chakra-ui/react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { userSelector, useDispatch } from 'react-redux';
import { useNavigate, Link as ReactLink, useLocation } from 'react-router-dom';

// TODO: redefine password length
export default function LoginScreen(){
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email.').required('An email address is required.'),
        password: Yup.string().min(1, 'Password is too short - must contain at least 1 character.').required('Password is required.'),
      })} onSubmit={(values)=> {
        dispatch(login(values.email, values.password));
      }}>
        {(formik)=>(
          <Container maxW='lg' py={{base: '12', md: '24'}} px={{base: '0', md: '8'}} minH='4xl'>
            
          </Container>
        )}
      </Formik>
  );
}