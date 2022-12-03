import React from 'react'
import {
    Flex,
    Heading,
    IconButton,
    Spacer,
    useColorMode,
  } from "@chakra-ui/react";

import { FaSun, FaMoon } from "react-icons/fa";

export default function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
  return (
    <Flex w="100%">
    <Heading ml="8" size="lg" fontWeight="semibold" color="yellow.400">
      CRESCENDO
    </Heading>
    <Spacer></Spacer>
    <IconButton
      mr={8}
      icon={isDark ? <FaSun /> : <FaMoon />}
      isRound="true"
      onClick={toggleColorMode}
    ></IconButton>
  </Flex>
  )
}
