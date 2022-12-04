import {StackDivider, VStack } from '@chakra-ui/react'
import React from 'react'
import Header from "../components/Header";
import HeroBanner from '../components/HeroBanner';
import Main from "../components/Main";

export default function MainScreen() {
  return (
    <VStack
  divider={<StackDivider borderColor='yellow' />}
  spacing={4}
  align='stretch'>
    <Header/>
    <HeroBanner/>
    <Main/>
   </VStack>
  )
}
