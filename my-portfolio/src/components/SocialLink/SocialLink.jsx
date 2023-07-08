import React from "react";
import { Box, Link, Flex } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialLink = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Box mr={4}>
        <Link href="https://www.linkedin.com/" isExternal fontSize="xl" color="blue.500">
          <FaLinkedin />
        </Link>
      </Box>
      <Box>
        <Link href="https://github.com/" isExternal fontSize="xl" color="gray.500">
          <FaGithub />
        </Link>
      </Box>
    </Flex>
  );
};

export default SocialLink;
