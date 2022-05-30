import React from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import { Grid } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  

  return (
    <Flex>
      <AddProduct/>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}> <Product/></Grid>
      <Pagination/>
    </Flex>
  );
};

export default Products;
