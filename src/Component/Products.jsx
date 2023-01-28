import React, { useEffect, useState } from 'react';
import {
  Box,
  Select,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Input,
  Grid,
  Button
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData, sortHandler,filterHandler, filterByName } from '../Redux/AppReducer/action';
import './response.css';
import { useNavigate } from 'react-router';

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.App.productsData)
  console.log(data);
 

  useEffect(() => {
  dispatch(getProductsData());
  },[])

  function filterHandle (e) {
    dispatch(filterHandler(e));
  }

  function filterProduct (e) {
    dispatch(filterByName(e));
  }


  function sortHandle(e) {
    dispatch(sortHandler(e))
    
    }

  let arr = JSON.parse(localStorage.getItem('resData')) || [];

    const getDetails = (elm) => {
      console.log(elm);
      arr.push(elm);
      localStorage.setItem('resData', JSON.stringify(arr));
      navigate('/details')
    }

  return (
    <div>
    
    <Heading style= {{
      color: 'purple',
      padding: '15px'
    }} mr={'5rem'}>Products</Heading>
    <Stack spacing={3} w={'18rem'} ml={'30rem'} mt={'2rem'}>
    <Input variant='flushed' placeholder='Search for Product' onChange ={filterProduct} />
    <Select 
    placeholder='Filter by Product Category' 
    variant='flushed'
    onChange={filterHandle}
    >
    <option value='Diapers & Wipes'>Diapers & Wipes</option>
    <option value='Feeding & Nursing'>Feeding & Nursing</option>
    </Select>

    <Select 
    placeholder='Sort by Product Price' 
    variant='flushed'
    onChange={sortHandle}
    >
    <option value='1'>Asc</option>
    <option value='2'>Des</option>
    </Select>
    </Stack>
    <Grid templateColumns='repeat(3, 1fr)' gap={2} className='res'>
    {
        data.map((elm) => (
          <Center py={5} key={elm.id} >
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: '400px' }}
            height={{ sm: '450px', md: '23rem' }}
            direction={{ base: 'column', md: 'row' }}
            boxShadow={'2xl'}
            padding={4}
            key={elm.id}
            >
            <Flex flex={1}>
              <Image
                objectFit="cover"
                boxSize="90%"
                borderRadius='1rem'
                src= {
                  elm.gs1_images?.front
                }
              />
            </Flex>
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              p={1}
              pt={2}
              >
              <Heading fontSize={'2xl'} fontFamily={'body'} color={'#43525d'} ml='1.5rem'>
                {
                  elm.brand
                }
              </Heading>
              
              <Text
                fontWeight={500} color={'gray.500'} size="sm" 
                
                >
                  { elm.name }
              </Text>
              <Text
                fontWeight={500} color={'gray.500'} size="sm" 
                px={3} pl={'1.5rem'}
                >
                  Category : {elm.category_level_1}
              </Text>
              <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                <Box
                  px={2}
                  py={1}
                  fontWeight={'700'}> 
                  <Text color='black' fontWeight={'400'} fontSize={'xl'}>Price: { elm.mrp.mrp} </Text>
                </Box>
              </Stack>
              <Stack
                width={'100%'}
                mt={'2rem'}
                direction={'row'}
                padding={2}
                justifyContent={'space-between'}
                alignItems={'center'}>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  boxShadow = {
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'green.500',
                  }}
                  onClick={() => getDetails(elm)}
                  >
                  Know More
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Center>
        ))
      }
   </Grid>
  </div>
  )
}

export default Products;