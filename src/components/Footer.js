import { Center, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Center>
      <Grid>
        <GridItem>
          <div> CRESCENDO &copy; {new Date().getFullYear()} </div>
        </GridItem>
      </Grid>
    </Center>
  );
}

export default Footer;
