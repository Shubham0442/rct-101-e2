import React from "react";
import {
  Modal,
  ModalBody,
  Input,
  Select,
  RadioGroup,
  Radio,
  useDisclosure,
  ModalOverlay,
  ModalContent
} from '@chakra-ui/react'
import { Button} from '@chakra-ui/react' 


import { useState } from "react";

const AddProduct = () => {
  const [user, setuser] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure() 
  // TODO: Remove below const and instead import them from chakra
  const [form, setform] = useState({})  

   const handleChange = (e)=>{
    let {name,value} = e.target 
    
    setform({...form,[name]:value})
   }

   const handleSubmit = (e) =>{

    e.preventDefault()
     
       console.log(form) 

       fetch("http://localhost:8080/products",{
          method: "POST",
          body: JSON.stringify({
             title:form.title,
             category: form.category,
             gender:form.gender,
             price:form.price
          }),
          headers:{
            "content-type":"application/json"
          }
       })
       .then((res)=>{
         return res.json()
       })
       .then((res)=>{
         setuser([...user],res)
       })
   }
  
  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen} >Add Product</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
        <ModalContent>
        <ModalBody pb={6}>
          <form>
          <Input data-cy="add-product-title" name="title" handleChange={handleChange} value={form.title}/>
          <Select data-cy="add-product-category" name="category" handleChange={handleChange} >
            <option data-cy="add-product-category-shirt" value="shirt">Shirt</option>
            <option data-cy="add-product-category-pant" value="pant">Pant</option>
            <option data-cy="add-product-category-jeans" value = "jeans">jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender" name="gender">
            <Radio data-cy="add-product-gender-male" name="gender" handleChange={handleChange}>Male</Radio>
            <Radio data-cy="add-product-gender-female" name="gender" handleChange={handleChange}>Female</Radio>
            <Radio data-cy="add-product-gender-unisex" name="gender" handleChange={handleChange}>Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" name="price" handleChange={handleChange} value = {form.price}/>
          <Button data-cy="add-product-submit-button" onClick = {handleSubmit} >Submit</Button>
          </form>
        </ModalBody>
      </ModalContent>
        
      </Modal>
    </>
  );
};

export default AddProduct;
