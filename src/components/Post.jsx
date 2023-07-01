import {
  Avatar,
  Divider,
  Flex,
  Heading,
  IconButton,
  Tag,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import {
  faBookmark,
  faComment,
  faShareFromSquare,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCaretDown,
  faCaretUp,
  faBookmark as faBookmarkSolid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";
import { getHumanizeTimeForOlderPost } from "../helper";

const Post = ({ post }) => {
  const { dispatch } = useAppContext();

  const finalVotes = post.upvotes - post.downvotes;

  const handleBookmark = () => {
    dispatch({ type: "BOOKMARK", payload: post.postId });
  };

  const upvoteHandler = () => {
    dispatch({ type: "UPVOTE", payload: post.postId });
  };

  const downvoteHandler = () => {
    dispatch({ type: "DOWNVOTE", payload: post.postId });
  };

  const displayTime = getHumanizeTimeForOlderPost(new Date(), post?.createdAt);

  return (
    <Flex w="full" maxW="600px" bg="white">
      <Flex flexDir="column" p={4} alignItems="center">
        <IconButton
          icon={<FontAwesomeIcon icon={faCaretUp} />}
          fontSize="3rem"
          color={finalVotes > 0 ? "#5249C7" : "#C5C5C5"}
          onClick={upvoteHandler}
          cursor="pointer"
          variant="ghost"
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
        />

        <Text fontWeight="bold" color="#5249C7">
          {finalVotes}
        </Text>

        <IconButton
          icon={<FontAwesomeIcon icon={faCaretDown} />}
          fontSize="3rem"
          color={finalVotes < 0 ? "#5249C7" : "#C5C5C5"}
          onClick={downvoteHandler}
          cursor="pointer"
          variant="ghost"
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
        />
      </Flex>
      <Flex flexDir="column">
        <Flex flexDir="column" py={4}>
          <Flex gap={2}>
            <Avatar size="sm" src={post?.picUrl} />
            <Flex flexGrow={1} justifyContent="space-between">
              <Flex flexDir="column" justifyContent="center">
                <Flex gap={2} alignItems="center">
                  <Flex gap={1} alignItems="center">
                    <Text fontSize="0.8rem">Posted by</Text>
                    <Text color="#5249C7">@{post?.username}</Text>
                  </Flex>
                  <Text fontSize="0.7rem"> {displayTime}</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir="column" gap={4} mt={4}>
            <Heading size="md">{post?.post}</Heading>
            <Flex gap={1}>
              {post?.tags.map((tag, i) => (
                <Tag size="sm" color="#5249C7" key={i}>
                  {tag.toUpperCase()}
                </Tag>
              ))}
            </Flex>
            <Text>{post?.postDescription}</Text>
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
                <Link to={`/post/${post?.postId}`}>
                  <IconButton
                    p={0}
                    icon={<FontAwesomeIcon icon={faComment} />}
                    variant="ghost"
                    _hover={{ bg: "transparent", color: "#3182CE" }}
                    _active={{ bg: "transparent", color: "#3182CE" }}
                  />
                </Link>
              </Tooltip>
              <Tooltip label="Share" openDelay={600}>
                <IconButton
                  p={0}
                  icon={<FontAwesomeIcon icon={faShareFromSquare} />}
                  variant="ghost"
                  _hover={{ bg: "transparent", color: "#3182CE" }}
                  _active={{ bg: "transparent", color: "#3182CE" }}
                />
              </Tooltip>
              <Tooltip label="Bookmark" openDelay={600}>
                <IconButton
                  icon={
                    <FontAwesomeIcon
                      icon={post.isBookmarked ? faBookmarkSolid : faBookmark}
                    />
                  }
                  variant="ghost"
                  onClick={handleBookmark}
                  _hover={{ bg: "transparent", color: "#38A169" }}
                  _active={{ bg: "transparent", color: "#38A169" }}
                  color={post.isBookmarked ? "#38A169" : ""}
                />
              </Tooltip>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Post;
