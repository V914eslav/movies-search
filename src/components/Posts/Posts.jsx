import React from "react";
import Post from "../Post/Post";

const Posts = (props) => {
  const { removePost } = props;
  return (
    <div>
      {props.posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            name={post.name}
            removePost={removePost}
          />
        );
      })}
    </div>
  );
};

export default Posts;
