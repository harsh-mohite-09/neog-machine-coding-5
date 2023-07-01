import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import Post from "../components/Post";
import { getSortedPosts } from "../helper";

const HomePage = () => {
  const {
    state: {
      forumData: { posts },
      sortBy,
    },
  } = useAppContext();

  const sortedPosts = getSortedPosts(posts, sortBy);

  return (
    <Box h="full" p={4}>
      <Flex flexDir="column" alignItems="center" pb={4} gap={8}>
        <Flex flexDir="column" w="600px" gap={8}>
          <Box>
            <Heading size="md">Latest Posts</Heading>
          </Box>
          <Flex flexDir="column" gap={2}>
            {sortedPosts.map((post) => (
              <Post post={post} key={post.postId} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomePage;
