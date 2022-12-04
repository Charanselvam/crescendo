import React from 'react'
import { Image } from '@chakra-ui/image';
import { useParams } from "react-router-dom";
import CardContents from "../Content";
import {  Box} from '@chakra-ui/layout';

export default function PostCardScreen() {
    const { id } = useParams();
    const post = CardContents[id - 1];
    const { image, name, description } = post;
  return (
    <div>
          <Image src={process.env.PUBLIC_URL +  image} alt={name} fluid />
    
            <Box>
              Description : {description}
            </Box>
  </div>
  )
}
