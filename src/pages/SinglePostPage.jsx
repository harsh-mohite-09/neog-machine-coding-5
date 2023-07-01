import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Post from "../components/Post";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";
import Comment from "../components/Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SinglePostPage = () => {
  const {
    state: {
      forumData: { posts },
    },
  } = useAppContext();
  const { id } = useParams();

  const post = posts.find(({ postId }) => postId === id);

  return (
    <Flex flexDir="column" alignItems="center" pb={4}>
      <Flex flexDir="column" w="600px" gap={2}>
        <Link to="/">
          <Flex p={4} gap={4} alignItems="center">
            <FontAwesomeIcon icon={faArrowLeft} />
            <Heading size="md">Post</Heading>
          </Flex>
        </Link>
        <Post post={post} />
        <Box>
          {post.comments.map((comment) => (
            <Comment
              comment={comment}
              key={comment.commentId}
              replyingTo={post?.username}
            />
          ))}
        </Box>
      </Flex>
    </Flex>
  );
};

export default SinglePostPage;
