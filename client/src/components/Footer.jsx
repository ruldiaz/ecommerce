import { ButtonGroup, Container, IconButton, Stack, Text, useColorModeValue, Box, Flex, Icon } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
// import { Logo } from './Logo'
import { GiTechnoHeart } from 'react-icons/gi';

export default function Footer(){
  return (
  <Box w='100%' bg={useColorModeValue('gray.100', 'gray.900')}>
  <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }} maxW='7xl'>
    <Stack spacing={{ base: '4', md: '5' }}>
      <Stack justify="space-between" direction="row" align="center">
        <Flex alignItems='center'>
          <Icon as={GiTechnoHeart} h={10} w={10} color='orange.400' />
          <Text fontSize='2xl' fontWeight='extrabold'>
            Tech Lines
          </Text>
        </Flex>
        <ButtonGroup variant="tertiary">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="fg.subtle">
          &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
        </Text>
      </Stack>
    </Container>
  </Box>
  );
}