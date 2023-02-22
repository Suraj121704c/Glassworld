import { Spinner } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Image,
} from "@chakra-ui/react";
import { useContext } from "react";
import { searchContext } from "../../Context/SearchContextProvider";
import { Footer2 } from "../Footer/Footer2";

const getData = (id) => {
  return fetch(`https://easy-pink-bull-shoe.cyclic.app/Products/${id}`).then(
    (res) => res.json()
  );
};

const SingleProductPage = () => {
  const { setCartData, cartData } = useContext(searchContext);
  const [data, setData] = React.useState([]);
  let params = useParams();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const { setWhishData, whishData } = useContext(searchContext);

  // console.log(params);

  const fetchAndUpdate = () => {
    setLoading(true);
    getData(params?.product_id)
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  React.useEffect(() => {
    fetchAndUpdate();
  }, []);

  // console.log(data);

  const handleCartData = () => {
    setCartData([...cartData, data]);
  };

  const handleWhistData = () => {
    setWhishData([...whishData, data]);
  };

  return loading ? (
    <Spinner />
  ) : error ? (
    <h1>Something went Wrong Please Refresh</h1>
  ) : (
    <>
      <Card align="center">
        <CardHeader>
          <Heading mb={4} color={"green"}>
            {data.name}
          </Heading>
        </CardHeader>
        <CardBody textAlign={"center"}>
          <Image src={data.imageTsrc} alt={data.name} />
          <Heading>Title : {data.productRefLink}</Heading>
          <h1
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "35px",
            }}
          >
            Rating : {data.rating}
          </h1>
          <h1
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "25px",
            }}
          >
            Price : {data.price}
          </h1>
          <h1
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "30px",
            }}
          >
            Style : {data.style}
          </h1>
          <h1
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "30px",
            }}
          >
            Product Type : {data.productType}
          </h1>
          <h1
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "25px",
            }}
          >
            Rating : {data.rating}
          </h1>
        </CardBody>
        <CardFooter>
          <Button colorScheme="blue" onClick={handleCartData}>
            ADD TO CART
          </Button>
          &nbsp;&nbsp;
          <Button colorScheme="green" onClick={handleWhistData}>
            ADD TO WHISHLIST
          </Button>
        </CardFooter>
      </Card>
      <Footer2 />
    </>
  );
};

export default SingleProductPage;
