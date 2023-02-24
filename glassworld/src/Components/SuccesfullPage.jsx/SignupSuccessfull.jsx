import { Box, Heading, Text,Button } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import { Footer2 } from '../Footer/Footer2';

export default function SignUpSuccess() {
  return (
    <>
    <NavBar />
    <Box textAlign="center" py={10} px={6} height={"600px"}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Thanks For Shopping with us
      </Heading>
      <Text color={'gray.500'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text>
      <Link to="/" style={{textDecoration:"none"}}>
      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
        marginTop={"30px"}
      >
        Go to Home
      </Button>
      </Link>
    </Box>
    <Footer2 />
    </>
  );
}