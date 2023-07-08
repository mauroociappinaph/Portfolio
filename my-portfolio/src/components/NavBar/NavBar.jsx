import React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex  py={4} px={8} color="orange.500" alignItems="center">
      <Text fontSize="lg" fontWeight="bold" mr={8}>
        Portfolio
      </Text>
      <Box ml="auto">
        <Link
          mr={4}
          href="#about"
          _hover={{ color: "#FF9F40", textDecoration: "underline" }}
        >
          About
        </Link>
        <Link
          mr={4}
          href="#projects"
          _hover={{ color: "#FF9F40", textDecoration: "underline" }}
        >
          Projects
        </Link>
        <Link
          mr={4}
          href="#skills"
          _hover={{ color: "#FF9F40", textDecoration: "underline" }}
        >
          Skills
        </Link>
        <Link
          href="#contact"
          _hover={{ color: "#FF9F40", textDecoration: "underline" }}
        >
          Contact
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
