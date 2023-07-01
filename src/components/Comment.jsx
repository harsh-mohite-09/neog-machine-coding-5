import {
  Avatar,
  Box,
  Divider,
  Flex,
  IconButton,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import {
  faHeart,
  faComment,
  faShareFromSquare,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Comment = ({ comment, replyingTo }) => {
  return (
    <Flex flexGrow={1} bg="white" w="full">
      <Flex flexGrow={1} flexDir="column" p={4}>
        <Flex flexDir="column" p={4}>
          <Flex gap={2}>
            <Box w="50px" h="50px">
              <Avatar src={comment?.picUrl} />
            </Box>
            <Flex justifyContent="space-between">
              <Flex flexGrow={1} flexDir="column" justifyContent="center">
                <Flex gap={2} alignItems="center">
                  <Text fontWeight="bold" size="md">{`${comment?.name}`}</Text>
                  <Text>@{comment?.username}</Text>
                  <Text fontSize="0.7rem">
                    {new Date(comment?.createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </Text>
                </Flex>
                <Flex gap={1} alignItems="center">
                  <Text fontSize="0.9rem">Replying to</Text>
                  <Text color="#5249C7">@{replyingTo}</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir="column" gap={4} mt={4}>
            <Text>{comment?.comment}</Text>
          </Flex>
        </Flex>

        <Divider borderColor="gray.300" />

        <Flex flexDir="column" p={2}>
          <Flex w="full">
            <Flex
              alignItems="center"
              gap={2}
              ml={{ base: 2, lg: 4 }}
              justifyContent="space-between"
              w="full"
            >
              <Tooltip label="Comment" openDelay={600}>
                <IconButton
                  p={0}
                  icon={<FontAwesomeIcon icon={faHeart} />}
                  variant="ghost"
                  _hover={{ bg: "transparent", color: "#E53E3E" }}
                  _active={{ bg: "transparent", color: "#E53E3E" }}
                />
              </Tooltip>
              <Tooltip label="Share" openDelay={600}>
                <IconButton
                  p={0}
                  icon={<FontAwesomeIcon icon={faComment} />}
                  variant="ghost"
                  _hover={{ bg: "transparent", color: "#3182CE" }}
                  _active={{ bg: "transparent", color: "#3182CE" }}
                />
              </Tooltip>
              <Tooltip label="Bookmark" openDelay={600}>
                <IconButton
                  icon={<FontAwesomeIcon icon={faShareFromSquare} />}
                  variant="ghost"
                  _hover={{ bg: "transparent", color: "#3182CE" }}
                  _active={{ bg: "transparent", color: "#3182CE" }}
                />
              </Tooltip>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Comment;
