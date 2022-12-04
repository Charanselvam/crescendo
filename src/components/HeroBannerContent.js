
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
 
  import React from 'react'
  
  export default function HeroBannerContent({BannerContent}) {
      
  
    return (
          <Center py={12}>
          <Box
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: {},
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image
                rounded={'lg'}
                height={230}
                width={282}
                objectFit={'cover'}
                src={process.env.PUBLIC_URL + BannerContent.image}
              />

            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'xl'} textTransform={'uppercase'}>
              {BannerContent.name}
              </Text>
              <Heading fontSize={'sm'} fontFamily={'body'} fontWeight={10} textAlign="center">
              {BannerContent.description}
              </Heading>
            </Stack>
          </Box>
        </Center>
    )
  }
  
  
  
  
  
  