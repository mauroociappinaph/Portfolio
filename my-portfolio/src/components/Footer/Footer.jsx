import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import SocialLink from "../SocialLink/SocialLink";

const Footer = () => {
  return (
    <Box bg="#333333" py={4} px={8} color="#FFFFFF" textAlign="center">
      <Box mb={4}>
        <SocialLink color="#FFFFFF" size={24} />
      </Box>
      <Text fontSize="sm" mb={2}>
        © 2022 Mi Sitio Web. Todos los derechos reservados.
      </Text>
    </Box>
  );
};

export default Footer;
