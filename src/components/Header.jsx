import React from "react";
import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      borderBottom="1px"
      borderColor={useColorModeValue("gray.300", "gray.700")}
      p={4}
      h="56px"
    >
      <Heading ml="5rem" fontSize={"1.2rem"} color="#5249C7">
        MyForum
      </Heading>
    </Flex>
  );
};

export default Header;
