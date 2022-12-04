import React from 'react'
import { Link } from 'react-router-dom';
import {  Avatar,
  AvatarGroup,
  Badge,
  Flex,
  Image,
  Text,
  DarkMode,
  useColorModeValue,} from '@chakra-ui/react'



export default function PostCard({CardContent}) {
  let boxBg = useColorModeValue("white !important", "#111c44 !important");
  let mainText = useColorModeValue("gray.800", "white");
  let iconColor = useColorModeValue("brand.200", "white");
  return (
    <Flex
      borderRadius='20px'
      bg={boxBg}
      p='20px'
      h='345px'
      w={{ base: "315px", md: "345px" }}
      alignItems='center'
      direction='column'>
      <Link  to={`/CardContent/${CardContent._id}`}>
      <Image
      boxSize='250px'
      objectFit='cover'
         src={process.env.PUBLIC_URL + CardContent.image}
         alt={CardContent.name}
      />
      </Link>
      <Text
          my='auto'
          fontWeight='600'
          color={mainText}
          textAlign='center'
          fontSize='xl'
          me='auto'>
          {CardContent.name}
        </Text>
      <Text
      noOfLines={[1, 2, 3]}
        fontWeight='100'
        color={mainText}
        textAlign='start'
        fontSize='SM'
        w='100%'>
         {CardContent.description}
      </Text>
      <Flex mt='auto' justify='space-between' w='100%' align='center'>
        <DarkMode>
          <Badge
            borderRadius='9px'
            size='md'
            colorScheme='green'
            color='green.400'
            textAlign='center'
            display='flex'
            justifyContent='center'
            alignItems='center'>
            {CardContent.tag}
          </Badge>
        </DarkMode>
        <AvatarGroup
          size='sm'
          max={4}
          color={iconColor}
          fontSize='9px'
          fontWeight='700'>
          <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
          <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
          <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
          <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
          <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
          <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
          <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
          <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
        </AvatarGroup>
      </Flex>
    </Flex>
  );
}
