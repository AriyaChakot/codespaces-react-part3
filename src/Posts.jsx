import React from "react";
import PostItem from "./Post-item";
import { useParams, useLocation } from 'react-router-dom';

const Posts = (props) => {
  const { id } = useParams();
  const urlstring = new URLSearchParams(useLocation().search);
  const fname = urlstring.get("fname");
  const lname = urlstring.get("lname");

  return (
    <div>
      {id}
      {fname} {lname}
      <PostItem title="Iphone13" content="details of iphone13" />
      <PostItem title="Iphone14" content="details of iphone14" />
    </div>
  );
};

export default Posts;
