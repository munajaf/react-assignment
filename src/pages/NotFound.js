import React from 'react';
import Header from "../components/Header";
import { Container } from "@material-ui/core";

const NotFound = () => {
  return (
    <Container component="main">
      <Header/>
      Page Not found
    </Container>
  );
}

export default NotFound;