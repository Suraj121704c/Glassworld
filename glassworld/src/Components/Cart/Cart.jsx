import React from "react";
import { useContext } from "react";
import { searchContext } from "../../Context/SearchContextProvider";
import {
  Box,
  Divider,
  Flex,
  Image,
  Text,
  Button,
  Heading,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartData } = useContext(searchContext);
  // console.log(cartData);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  return (
    <div>
      {cartData.map((el) => (
        <Box
          display="flex"
          gap={6}
          alignItems="center"
          bg="#fff"
          borderRadius="12px"
          p="6"
          boxShadow="0 1px 4px rgb(0 0 0 / 10%)"
          key={el.id}
        >
          <Box w="30%">
            <a href="/" rel="noopener noreferrer">
              <Image w="236px" src={el.imageTsrc} />
            </a>
          </Box>
          <Box w="70%" display="flex" flexDirection="column" gap={8}>
            <Box display="flex" flexDirection="row" gap={5}>
              <Box w="60%">
                <a href="/" rel="noopener noreferrer">
                  <Box>
                    <Text
                      fontWeight="700"
                      fontStyle="normal"
                      lineHeight="24px"
                      letterSpacing="-.02em"
                      textTransform="capitalize"
                      color="#000042"
                    >
                      {/* static data */}
                      {/* {el.title} */}
                      {el.colors +
                        " Block Phone & Computer Glasses: Classic chase " +
                        el.colors +
                        " Transparent " +
                        el.style +
                        " " +
                        el.shape +
                        " Lenskart Blu LB " +
                        el.productId}
                    </Text>
                  </Box>
                </a>
              </Box>
              <Box w="40%">
                <Text display="flex" gap={6}>
                  <Text color="#9999b3" fontWeight="500">
                    <s>{"₹" + el.mPrice}</s>
                  </Text>
                  <Text color="#000042" fontWeight="700">
                    {"₹" + el.price}
                  </Text>
                </Text>
              </Box>
              <Divider borderBottom="dashed 1px #cecedf" borderTop="none" />
              <Box display="flex" flexDirection="row" alignItems="center">
                <Text
                  mr="16px"
                  textDecoration="underline"
                  fontWeight="700"
                  fontStyle="normal"
                  lineHeight="24px"
                  letterSpacing="-.02em"
                  textTransform="capitalize"
                  color="#000042"
                  // onClick={() => {
                  //   alert()
                  //   props.refresh(el.id)

                  // }}
                  cursor="pointer"
                >
                  Remove
                </Text>
                <Box>
                  <Flex alignItems="center" gap={2}>
                    <Button
                      bg="white"
                      color="red"
                      _hover={{
                        color: "white",
                        background: "red",
                      }}

                      // onClick={() =>{
                      //   props.updateminus(el.id,el.quntity)
                      // }}
                    >
                      <Text>
                        <AiOutlineMinusCircle size={15} />
                      </Text>
                    </Button>
                    <Text>{parseInt(el.quntity) + 1}</Text>
                    <Button
                      bg="white"
                      color="green"
                      _hover={{
                        color: "white",
                        background: "green",
                      }}
                      // onClick={() =>{
                      //   props.update(el.id,el.quntity)
                      // }}
                    >
                      <Text>
                        <AiOutlinePlusCircle size={15} />
                      </Text>
                    </Button>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
      <Box textAlign={"center"} marginTop={"20px"}>
        <Heading color={"green"} marginBottom={"20px"}>
          Total :{" "}
        </Heading>
        <Tooltip
          hasArrow
          label="CLick Here To CheckOut"
          bg="red.600"
          marginBottom={"20px"}
        >
          <Button color={"white"} bg="blue.500" onClick={onOpen}>
            CheckOut
          </Button>
        </Tooltip>
        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader>Enter Otp</AlertDialogHeader>
            <AlertDialogBody>
              <PinInput otp>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Link to={"/"}>
                <Button colorScheme="red" ml={3} onClick={onClose}>
                  Yes
                </Button>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Box>
    </div>
  );
};

export default Cart;
