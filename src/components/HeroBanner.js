import React from 'react'
import {
  Box,
  Center,
  Text,
  Grid, 
  GridItem
 
} from '@chakra-ui/react';
import BannerContents from '../BannerContent';
import HeroBannerContent from './HeroBannerContent';
import { useColorMode } from '@chakra-ui/color-mode'
export default function HeroBanner() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <div>
    <Center>
    <Box>
        <Text fontSize="5xl" fontWeight="semibold" textAlign="center">WHAT WE DO</Text>
        <Text color={isDark ? "gray.200" : "gray.500"} textAlign="center">We are not defined by boundaries, never will.</Text>
    </Box>
    </Center>
    <Grid templateColumns='repeat(4, 1fr)' gap={6}>
    {BannerContents.map(BannerContent =>(
        <GridItem key = {BannerContent._id}>
            <HeroBannerContent BannerContent={BannerContent}/>
        </GridItem>
    ))}
</Grid>
</div>
  )
}
