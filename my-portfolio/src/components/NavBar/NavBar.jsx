import React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <Flex  py={4} px={8} color="orange.500" alignItems="center" justify="center">
      <Text fontSize="lg" fontWeight="bold" mr={8}>
        Portfolio
      </Text>
      <Box ml="auto">
        <Link
          mr={4}
          href="#about"
          _hover={{ color: "#FF9F40", textDecoration: "underline" }}
        >
          Sobre Mi
        </Link>
        <Link
          mr={4}
          href="#projects"
          _hover={{ color: "#FF9F40", textDecoration: "underline" }}
        >
          Pryectos 
        </Link>
        <Link
          mr={4}
          href="#skills"
          _hover={{ color: "#FF9F40", textDecoration: "underline" }}
        >
          Habilidades
        </Link>
        <Link
          href="#contact"
          _hover={{ color: "#FF9F40", textDecoration: "underline" }}
        >
          Contacto
        </Link>
      </Box>
      <SearchBar />
    </Flex>
  );
};

export default Navbar;
