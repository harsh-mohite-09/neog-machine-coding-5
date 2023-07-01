import React from "react";
import {
  Flex,
  useColorModeValue,
  Box,
  Avatar,
  Text,
  Heading,
} from "@chakra-ui/react";
import { useAppContext } from "../context/AppContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faHouse,
  faRocket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const {
    state: { forumData },
  } = useAppContext();

  return (
    <Flex
      h="full"
      p={4}
      flexDir="column"
      borderRightWidth="1px"
      borderColor="gray.300"
      justifyContent="space-between"
      position="relative"
      alignItems="center"
    >
      <Flex flexDir="column" gap={4} fontSize="1.2rem" flexGrow={1}>
        <Box
          p={2}
          _hover={{
            bg: useColorModeValue("gray.100", "gray.700"),
            textDecoration: "none",
          }}
        >
          <Flex alignItems="center" gap={4} transition="all 0.1s linear">
            <FontAwesomeIcon icon={faHouse} />
            <Text>Home</Text>
          </Flex>
        </Box>
        <Box
          p={2}
          _hover={{
            bg: useColorModeValue("gray.100", "gray.700"),
            textDecoration: "none",
          }}
        >
          <Flex alignItems="center" gap={4} transition="all 0.1s linear">
            <FontAwesomeIcon icon={faRocket} />
            <Text>Explore</Text>
          </Flex>
        </Box>
        <Box
          p={2}
          _hover={{
            bg: useColorModeValue("gray.100", "gray.700"),
            textDecoration: "none",
          }}
        >
          <Flex alignItems="center" gap={4} transition="all 0.1s linear">
            <FontAwesomeIcon icon={faBookmark} />
            <Text>Bookmarks</Text>
          </Flex>
        </Box>
        <Box
          p={2}
          _hover={{
            bg: useColorModeValue("gray.100", "gray.700"),
            textDecoration: "none",
          }}
        >
          <Flex alignItems="center" gap={4} transition="all 0.1s linear">
            <FontAwesomeIcon icon={faUser} />
            <Text>Profile</Text>
          </Flex>
        </Box>
      </Flex>

      <Flex mb="4">
        <Flex gap={4} alignItems="center">
          <Avatar src={forumData?.picUrl} size="md" />
          <Flex flexDir="column">
            <Heading size="sm">{`${forumData?.name}`}</Heading>
            <Text fontSize="sm">@{forumData?.username}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
