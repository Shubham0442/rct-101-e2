import React from "react";
import { useState,useEffect } from "react";
import { Stack,Image,Text,Tag,TagLabel,Heading,Box } from '@chakra-ui/react'
const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  

  const [get, setGet] = useState([]) 
  
  // fetch("http://localhost:8080/products")
  //   .then((res)=>{
  //     return res.json()
  //   })
  //   .then((res)=>{
  //     console.log(res) 
  //     setGet(res)
  //   })

  useEffect(() => {
    
    fetch("http://localhost:8080/products")
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
      console.log(res) 
      setGet(res)
    })
  
    
  }, [])
  



  return ( 
     get.map((elem)=>(
      <Stack data-cy="product" key = {elem.id}>
       <Image data-cy="product-image" src={elem.imageSrc}/>
       <Text data-cy="product-category">{elem.category}</Text>
       <Tag>
        <TagLabel data-cy="product-gender">{elem.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{elem.title}</Heading>
      <Box data-cy="product-price">{elem.price}</Box>
    </Stack>
     ))
  );
};

export default Product;
