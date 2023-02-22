import { Box, Heading, Text,Button } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import {AuthContext} from '../../Context/AuthContextProvider';
import { Navigate } from 'react-router-dom';

export default function LoginSuccess() {
    const {isAuth,logout} = useContext(AuthContext)

    if(!isAuth){
        return <Navigate to={"/login"}/>
    }

  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        You Loginned Sucessfully , Happy Shopping
      </Heading>
      <Text color={'gray.500'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text>
      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
        marginTop="20px"
        onClick={logout}
      >
        LOGOUT
      </Button>
    </Box>
  );
}