import React from 'react'
import { Grid, GridItem} from '@chakra-ui/react'
import PostCard from './PostCard';
import CardContents from '../Content';


export default function Main() {
  return (
  <Grid templateColumns='repeat(3, 1fr)' gap={6}>
    {CardContents.map(CardContent =>(
        <GridItem key = {CardContent._id}>
            <PostCard CardContent={CardContent}/>
        </GridItem>
    ))}
</Grid>
  )
}
