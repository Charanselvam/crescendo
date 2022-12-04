import { Center } from '@chakra-ui/react'
import { Box, Text } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/color-mode'
import React from 'react'

export default function HeroBanner() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
  return (
    <Center>
    <Box>
        <Text fontSize="5xl" fontWeight="semibold" textAlign="center">WHAT WE DO</Text>
        <Text color={isDark ? "gray.200" : "gray.500"} textAlign="center">We are not defined by boundaries, never will.</Text>
    </Box>
    </Center>
  )
}
