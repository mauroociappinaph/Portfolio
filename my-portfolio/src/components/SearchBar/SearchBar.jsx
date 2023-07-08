import React, { useState } from 'react';
import { Input, Button, Flex } from '@chakra-ui/react';

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  return (
    <Flex alignItems="center">
      <Input
        type="text"
        placeholder="Buscar..."
        value={searchValue}
        onChange={handleInputChange}
      />
      <Button ml={2} colorScheme="blue" onClick={handleSearch}>
        Buscar
      </Button>
    </Flex>
  );
};

export default SearchBar;
