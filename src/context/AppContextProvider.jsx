import { createContext, useContext, useReducer } from "react";
import { forumDataDB } from "../forumData";

const AppContext = createContext({
  state: {},
  dispatch: () => {},
});

const initialState = {
  forumData: forumDataDB,
  sortBy: "latest",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return {
        ...state,
        sortBy: action.payload,
      };

    case "BOOKMARK":
      return {
        ...state,
        forumData: {
          ...state.forumData,
          posts: state.forumData.posts.map((post) =>
            post.postId === action.payload
              ? { ...post, isBookmarked: !post.isBookmarked }
              : post
          ),
        },
      };

    case "UPVOTE":
      return {
        ...state,
        forumData: {
          ...state.forumData,
          posts: state.forumData.posts.map((post) =>
            post.postId === action.payload
              ? { ...post, upvotes: post.upvotes + 1 }
              : post
          ),
        },
      };

    case "DOWNVOTE":
      return {
        ...state,
        forumData: {
          ...state.forumData,
          posts: state.forumData.posts.map((post) =>
            post.postId === action.payload
              ? { ...post, downvotes: post.downvotes + 1 }
              : post
          ),
        },
      };

    default:
      break;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
