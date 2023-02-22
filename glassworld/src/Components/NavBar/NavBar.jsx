import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { searchContext } from "../../Context/SearchContextProvider";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const {setq} = useContext(searchContext)

  // console.log(q)

  return (
    <div>
      <nav
        className="fnav"
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Link style={{ textDecoration: "none" }} to="/">
          <img
            src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
            alt="navbar"
          />
        </Link>

        <img
          src="https://static.lenskart.com/media/mobile/images/phone_number.svg"
          alt="tollfreeNumber"
        />
        <input
          style={{
            width: "300px",
            height: "27px",
            borderRadius: "3px",
            textAlign: "center",
            border: "2px solid gray",
            marginTop: "16px",
          }}
          type="text"
          placeholder="what are you looking for"
          onChange={(e) => setq(e.target.value)}
        />
        <p style={{ marginTop: "17px", fontSize: "17px" }}>Track Order</p>

        <Link to={"/login"} style={{ textDecoration: "none" }}>
          <p style={{ marginTop: "17px", fontSize: "17px" }}>
            Sign In & Sign Up
          </p>
        </Link>

        <p style={{ marginTop: "17px", fontSize: "17px" }} onClick={onOpen}>
          Whis List
        </p>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Add To WhisList</DrawerHeader>

            <DrawerBody></DrawerBody>

            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Link to={"/cart"} style={{ textDecoration: "none" }}>
          <p style={{ marginTop: "17px", fontSize: "17px" }}>cart</p>
        </Link>
      </nav>

      <nav
        className="snav"
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "11px",
          backgroundColor: "rgb(218,213,213)",
        }}
      >
        <Link to={"/eye"}>
          <p>EYEGLASSES</p>
        </Link>
        <Link to={"/computer"}>
          <p>COMPUTER GLASSES</p>
        </Link>
        <Link to={"/kids"}>
          <p>KIDS GLASSES</p>
        </Link>
        <Link to={"/contacts"}>
          <p>CONTACT GLASSES</p>
        </Link>
        <Link to={"/shades"}>
          <p>SUN GLASSES</p>
        </Link>
        <p>HOME EYE-TEST</p>
        <img
          src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"
          alt="3dimage"
          style={{ width: "5%" }}
        />
      </nav>
    </div>
  );
};

export default NavBar;
