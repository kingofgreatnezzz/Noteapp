import React from "react";
import { Link } from "react-router-dom";


function Listitem({ post }) {
  console.log("data", post);
  return (
    <Link to={`/post/${post.id}`}>
      <h2>{post.body}</h2>
    </Link>
  );
}

export default Listitem;
