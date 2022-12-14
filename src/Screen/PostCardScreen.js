import React from "react";
import { Image } from "@chakra-ui/image";
import { useParams } from "react-router-dom";
import CardContents from "../Content";
import { VStack, Text, Heading } from "@chakra-ui/react";

export default function PostCardScreen() {
  const { id } = useParams();
  const post = CardContents[id - 1];
  const { image, name, description } = post;
  return (
    <VStack spacing={12}>
      <Heading>{name}</Heading>
      <Image
        src={process.env.PUBLIC_URL + image}
        alt={name}
        fluid
        align="center"
      />

      <Text>{description}</Text>
    </VStack>
  );
}
