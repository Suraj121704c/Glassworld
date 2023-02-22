import React from "react";
import {
  Box,
  Checkbox,
  Button,
  Flex,
  Grid,
  GridItem,
  Select,
  Switch,
  Text,
  VStack,
  Image,
  Spinner,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbArrowsUpDown } from "react-icons/tb";
import FrameType from "./FramerType";
import { useState, useEffect } from "react";
import axios from "axios";
import { Footer2 } from "../Footer/Footer2";
import { searchContext } from "../../Context/SearchContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ComputerGlasses = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [err, setError] = useState(false);
  const {q} = useContext(searchContext)

  // console.log(q)

  const fetchproduct = (page,q) => {
    setLoading(true);
    axios(
      `https://easy-pink-bull-shoe.cyclic.app/Products?q=${q}&_page=${page}&_limit=9`
    )
      .then((res) => {
        // console.log(res.data)
        setProducts(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  };

  // console.log(products);

  useEffect(() => {
    fetchproduct(page,q);
  }, [page,q]);

  // Sorting First
  const fetchAndUpdate2 = (order, page) => {
    setLoading(true);

    axios
      .get(
        `https://easy-pink-bull-shoe.cyclic.app/Products?_sort=price&_order=${order}&_page=${page}&_limit=9`
      )
      .then((res) => {
        setProducts(res);
        setLoading(false);

        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(order);

  // Rating Sort
  const fetchAndUpdate3 = (order, page) => {
    setLoading(true);

    axios
      .get(
        `https://easy-pink-bull-shoe.cyclic.app/Products?_sort=rating&_order=${order}&_page=${page}&_limit=9`
      )
      .then((res) => {
        setProducts(res);
        setLoading(false);

        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Filter According to Frame
  const fetchAndUpdate4 = (frame, page) => {
    setLoading(true);

    axios
      .get(
        `https://easy-pink-bull-shoe.cyclic.app/Products?shape=${frame}&_page=${page}&_limit=9`
      )
      .then((res) => {
        setProducts(res);
        setLoading(false);

        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Based On the Gender
  const fetchAndUpdate5 = (gender, page) => {
    setLoading(true);

    axios
      .get(
        `https://easy-pink-bull-shoe.cyclic.app/Products?gender=${gender}&_page=${page}&_limit=9`
      )
      .then((res) => {
        setProducts(res);
        setLoading(false);

        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Based on the color
  const fetchAndUpdate6 = (color, page) => {
    setLoading(true);
    axios
      .get(
        `https://easy-pink-bull-shoe.cyclic.app/Products?colors=${color}&_page=${page}&_limit=9`
      )
      .then((res) => {
        setLoading(false);
        setProducts(res);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <img
          src="https://static1.lenskart.com/media/desktop/img/Feb23/style/plp/PLP%20Camapaign%20-%20WEB%20(3).jpg"
          alt="banner1"
        />
      </div>
      <Flex m="0" px="2%">
        <Box w="18%" m={0}>
          <Box my="20px">
            <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
              FRAME TYPE
            </Text>
            <Flex>
              <FrameType
                src="https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png"
                type="Full Rim"
              />
              <FrameType
                src="https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png"
                type="Half Rim"
              />
              <FrameType
                src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png"
                type="Rimless"
              />
            </Flex>
          </Box>
          <Box mb="20px">
            <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
              FRAME SHAPE
            </Text>
            <Grid templateColumns="repeat(3, 1fr)">
              <GridItem>
                <FrameType
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rectangle.png"
                  type="Rectangle"
                />
              </GridItem>
              <GridItem>
                <FrameType
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Round.png"
                  type="Round"
                />
              </GridItem>
              <GridItem>
                <FrameType
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/CatEye.png"
                  type="Cat Eye"
                />
              </GridItem>
              <GridItem>
                <FrameType
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Square.png"
                  type="Square"
                />
              </GridItem>
              <GridItem>
                <FrameType
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Geometric.png"
                  type="Geometric"
                />
              </GridItem>
              <GridItem>
                <FrameType
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Wayfarer.png"
                  fil="wayfarer"
                  type="Wayfarer"
                />
              </GridItem>
              <GridItem>
                <FrameType
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Aviator.png"
                  type="Aviator"
                />
              </GridItem>
              <GridItem>
                <FrameType
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Hexagonal.png"
                  type="Hexago..."
                />
              </GridItem>
              <GridItem>
                <FrameType
                  src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Clubmaster.png"
                  type="Clubmas..."
                />
              </GridItem>
            </Grid>
          </Box>
          <VStack mb="20px" alignItems="flex-start">
            <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
              FRAME COLOR
            </Text>
            <Checkbox colorScheme="green">Black ({285})</Checkbox>
            <Checkbox colorScheme="green">Blue ({285})</Checkbox>
            <Checkbox colorScheme="green">White ({285})</Checkbox>
            <Checkbox colorScheme="green">Gold ({285})</Checkbox>
            <Checkbox colorScheme="green">Silver ({285})</Checkbox>
            <Checkbox colorScheme="green">Green ({285})</Checkbox>
          </VStack>
          <label>FRAMES</label>
          <Select
            border="0px"
            borderTop="1px"
            borderRadius="0px"
            borderColor="gray.300"
            p="0px"
            onChange={(e) => fetchAndUpdate4(e.target.value)}
          >
            <option value={"Cateye"}>Cateye</option>
            <option value={"Wayfarer"}>Wayfarer</option>
            <option value={"Rectangle"}>Rectangle</option>
            <option value={"Wrapround"}>Wrapround</option>
          </Select>
          <label>RATING</label>
          <Select
            border="0px"
            borderTop="1px"
            borderRadius="0px"
            borderColor="gray.300"
            p="0px"
            onChange={(e) => fetchAndUpdate3(e.target.value)}
          >
            <option value={"desc"}>Price : low to high</option>
            <option value={"asc"}>Price : high to low</option>
          </Select>
          <label>PRICE</label>
          <Select
            border="0px"
            borderTop="1px"
            borderRadius="0px"
            borderColor="gray.300"
            p="0px"
            onChange={(e) => fetchAndUpdate2(e.target.value)}
          >
            <option value={"desc"}>Price : low to high</option>
            <option value={"asc"}>Price : high to low</option>
          </Select>
          <label>GENDER</label>
          <Select
            border="0px"
            borderTop="1px"
            borderRadius="0px"
            borderColor="gray.300"
            p="0px"
            onChange={(e) => fetchAndUpdate5(e.target.value)}
          >
            <option value="Men">male</option>
            <option value={"Women"}>female</option>
            <option value={"Men,Women"}>male & female</option>
          </Select>
          <label>COLOR</label>
          <Select
            border="0px"
            borderTop="1px"
            borderBottom="1px"
            borderRadius="0px"
            borderColor="gray.300"
            p="0px"
            onChange={(e) => fetchAndUpdate6(e.target.value)}
          >
            <option value={"Blue"}>blue</option>
            <option value={"Green"}>green</option>
            <option value={"Brown"}>brown</option>
            <option value={"Silver"}>silver</option>
            <option value={"Purple"}>purple</option>
            <option value={"Multicolor"}>multicolor</option>
            <option value={"Smoke"}>smoke</option>
          </Select>
        </Box>

        <Box
          overflow="scroll"
          w="100%"
          borderLeft="1px solid"
          borderColor="gray.300"
          textAlign={"center"}
          m={0}
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            p="5px"
            bg="#e2e8f0"
            border="1px"
            borderColor="gray.400"
          >
            <Text>COMPUTER GLASSES</Text>
            <Flex alignItems="center">
              <Text fontWeight="bold" mr="5px" color="green">
                VIEW FRAMES
              </Text>
              <Switch colorScheme="green" isChecked size="lg" />
              <Text ml="5px">VIEW 3D TRY ON</Text>
            </Flex>
            <Flex>
              <Flex alignItems="center">
                <TbArrowsUpDown color="green" fontWeight="bold" />
                <Text fontWeight="bold" color="green">
                  SortBy
                </Text>
              </Flex>

              <Select
                border="2px"
                borderRadius="3px"
                borderColor="black"
                ml="4px"
                p="0px"
                onChange={(e) => fetchAndUpdate2(e.target.value)}
              >
                <option value="desc">Price : low to high</option>
                <option value="asc">Price : high to low</option>
              </Select>
            </Flex>
          </Flex>
          <Text mt="5px" textAlign="center">
            Showing {products?.data?.length} of All Results
          </Text>

          {loading === true ? (
            <Spinner />
          ) : (
            <Grid
              m="20px 10px"
              templateColumns="repeat(3, 1fr)"
              height="100vh"
              gap={6}
              textAlign="center"
            >
              {products?.data?.map((el) => (
                <GridItem key={el.id}>
                  <Box
                    position="relative"
                    border="1px solid"
                    borderColor="gray.300"
                    borderRadius="3%"
                    p="10px"
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      m="auto"
                      width="80%"
                      src={el.imageTsrc}
                      alt="image"
                    />
                    <Box position="absolute" top="5px" right="5px">
                      <AiOutlineHeart size="30px" />
                    </Box>
                    <Box p="10px">
                      <Flex justifyContent="space-between" alignItems="center">
                        <Flex justifyContent="flex-end"></Flex>
                      </Flex>
                      <Text mt="10px" fontWeight="bold" color="#000042">
                        {el.name}{" "}
                      </Text>
                      <Text mt="10px" fontWeight="light" color="#000042">
                        Shape : {el.shape}
                      </Text>
                      <Text mt="10px" fontWeight="bold" color="#000042">
                        ₹{el.price}{" "}
                        <span
                          style={{
                            fontSize: "14px",
                            fontWeight: "lighter",
                            textDecoration: "line-through",
                          }}
                        >
                          ₹{el.mPrice}
                        </span>
                      </Text>
                      <Link to={`/products/${el.id}`}>MoreDetails...</Link>
                    </Box>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          )}
        </Box>
      </Flex>

      <Flex mt={5} mb={10} gap={5} justifyContent="Center" ml="17%">
        <Button isDisabled={page === 1} onClick={() => setPage(page - 1)}>
          PRE
        </Button>
        <Button>{page}</Button>
        <Button onClick={() => setPage(page + 1)}>NEXT</Button>
      </Flex>

      <Footer2 />
    </div>
  );
};

export default ComputerGlasses;
