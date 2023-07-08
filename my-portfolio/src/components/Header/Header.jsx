import React from "react";
import { Box, Heading, Text, Grid } from "@chakra-ui/react";
import Avatar from "react-avatar";
import SocialLink from "../SocialLink/SocialLink";

const Header = () => {
  return (
    <Box
      bg="#FFCBA4"
      py={6}
      px={8}
      color="orange.500"
      height="20rem"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Grid templateColumns="1fr 1fr 1fr" alignItems="center" columnGap={4}>
        <div>
          <Avatar name="Mauro Ciappina" round={true} size={80} />
        </div>
        <div>
          <Heading
            as="h1"
            size="xl"
            fontFamily="belanosima"
            fontWeight="600"
            mb={1}
          >
            MAURO CIAPPINA
          </Heading>
          <Text as="h4" fontFamily="Work Sans" fontSize="md">
            Fullstack Developer & Comunicador Audiovisual
          </Text>
        </div>
      </Grid>
      <SocialLink />
    </Box>
  );
};

export default Header;
