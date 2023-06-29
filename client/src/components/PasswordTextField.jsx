import React, { useState } from "react";
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Field, useField } from 'formik';
import { InputRightElement, Button, InputGroup } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function PasswordTextField( {label, type, name, placeholder} ){
  const [showPassword, setShowPassword] = useState(false);
  const [field, meta] = useField({type, name, placeholder});

  return (
    <FormControl isInvalid={meta.error && meta.touched} mb='6'>
      <FormLabel noOfLines={1}>{label}</FormLabel>
      <InputGroup>
        <Field as={Input} {...field} type={type} name={name} placeholder={placeholder} />      
        <InputRightElement h='full'>
          <Button variant='ghost' onClick={()=>setShowPassword((showPassword)=>!showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}