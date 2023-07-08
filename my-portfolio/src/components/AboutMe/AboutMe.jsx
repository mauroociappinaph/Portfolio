import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const AboutMe = () => {
  return (
    <Box
      bg="#F2F2F2"
      p={8}
      borderRadius="8px"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
    >
      <Heading as="h1" fontSize="2rem" fontWeight="bold" color="#333333" mb={4}>
        About Me
      </Heading>
      <Text fontSize="1.2rem" color="#666666">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit euismod, tincidunt felis quis,
        aliquam purus. Nulla facilisi. Nam nec commodo leo, et lacinia turpis. Integer et convallis felis, vitae
        elementum tellus. Cras at orci vitae ligula fermentum lobortis. Nullam auctor sapien eu mauris aliquet, in
        gravida ipsum euismod. Sed interdum, neque sed fermentum congue, lectus velit viverra diam, vel maximus felis
        mi id urna. Sed lacinia est in nunc congue, id varius nisl congue.
      </Text>
    </Box>
  );
};

export default AboutMe;
