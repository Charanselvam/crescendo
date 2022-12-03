import React from 'react'
import { Image } from '@chakra-ui/image';
import { Link } from 'react-router-dom';
import { Card, CardBody } from '@chakra-ui/react'
import { Stack, Heading, Text ,Divider} from '@chakra-ui/layout';

export default function PostCard({CardContent}) {

  return (

<Card maxW='sm'>
  <CardBody>
  <Link  to={`/CardContent/${CardContent._id}`}>
    <Image
      boxSize='150px'
      objectFit='cover'
      src={CardContent.image}
      alt={CardContent.name}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{CardContent.name}</Heading>
      <Text noOfLines={[1, 2, 3]}>
        {CardContent.description}
      </Text>
    </Stack>
    </Link>
  </CardBody>
  <Divider />
</Card>



  )
}
