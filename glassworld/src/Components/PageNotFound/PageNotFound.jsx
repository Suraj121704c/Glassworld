import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const PageNotFound = () => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>You Entered A Wrong Url!</AlertTitle>
      <AlertDescription>
        Please Check The Url U Have Entered
      </AlertDescription>
    </Alert>
  );
};

export default PageNotFound;
