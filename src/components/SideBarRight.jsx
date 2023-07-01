import React from "react";
import { Box, Flex, Select, Text } from "@chakra-ui/react";
import { useAppContext } from "../context/AppContextProvider";

const SideBarRight = () => {
  const {
    state: { sortBy },
    dispatch,
  } = useAppContext();

  const sortHandler = (e) => {
    dispatch({ type: "SORT", payload: e.target.value });
  };

  return (
    <Flex
      borderLeft="1px"
      borderColor="gray.300"
      h="full"
      w="20rem"
      flexDir="column"
      gap={4}
      fontSize="1.2rem"
      p={2}
      pr={4}
    >
      <Box p="2">
        <Text fontSize="xl" fontWeight="bold" mb="4" ml="4">
          Sort By
        </Text>
        <Flex flexDir="column" gap="4" p="2">
          <Select value={sortBy} onChange={sortHandler}>
            <option value="latest">Latest Posts</option>
            <option value="upvoted">Most Upvoted</option>
          </Select>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SideBarRight;
