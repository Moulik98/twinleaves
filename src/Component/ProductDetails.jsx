import React from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react';

const ProductDetails = () => {

    let details = JSON.parse(localStorage.getItem('resData'));
    console.log('details', details);

  return (
    <div>
        {
            details.map((elm) => (
                <Center py={5} key={elm.id} >
                <Stack
                  borderWidth="1px"
                  borderRadius="lg"
                  w={{ sm: '100%', md: '410px' }}
                  height={{ sm: '450px', md: '23rem' }}
                  direction={{ base: 'column', md: 'row' }}
                  boxShadow={'2xl'}
                  padding={4}
                  key={elm.id}
                  >
                  <Flex flex={1}>
                    <Image
                      objectFit="cover"
                      boxSize="100%"
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
                  </Stack>
                </Stack>
              </Center>
              )) 
        }
    </div>
  )
}

export default ProductDetails;