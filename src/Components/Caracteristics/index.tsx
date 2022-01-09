import { Flex, Grid, GridItem } from "@chakra-ui/layout";
import Caracteristic from "./Caracteristic";

export default function Caracteristicas() {
  return (
    <Grid
      templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["10","32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1,5]}
    >
      
    <GridItem>
      <Caracteristic icon="cocktail" text="vida noturna" />
    </GridItem>
    <GridItem>
      <Caracteristic icon="surf 1" text="praia" />
    </GridItem>
    <GridItem>
      <Caracteristic icon="building 1" text="moderno" />
    </GridItem>
    <GridItem>
      <Caracteristic icon="museum 1" text="clássico" />
      </GridItem>
    <GridItem colSpan={[2, 2, 2, 1]}>
      <Caracteristic icon="Group" text="e mais..." />
      </GridItem>
    </Grid>
  )
}