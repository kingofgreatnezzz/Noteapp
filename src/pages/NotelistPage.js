import React, { useEffect, useState } from "react";
import axios from "axios";
import Listitem from "../component/Listitem";

function NotelistPage() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => {
        res.setPost();
      })
      .catch((err) => {
        console.log("error fetching data", err);
      });
  }, []);

  return (
    <div>
      NOTES
      <div>
        {posts.map((post) => (
          <Listitem key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default NotelistPage;
