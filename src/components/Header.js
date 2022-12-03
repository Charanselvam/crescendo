import React from 'react'

import { Center } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import {  Stack, Flex, Box, Text } from '@chakra-ui/layout';
import logo from './SWingz.png'

export default function Header() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

   

  return (
    
            <Stack>
              <Center>
            <Flex gap={100}>
                <Box>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, we are</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Solartis Wingz</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>And this is CRESCENDO a Solartis Magazine</Text>
                </Box>
                
                <Image alignSelf="center" 
                    borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="200px" src={logo} />
            </Flex>
            </Center>
            </Stack>
        
  )
}
