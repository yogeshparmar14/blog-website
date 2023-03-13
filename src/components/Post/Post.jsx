import React, { useState } from "react";
import "./Post.css";
const Post = ({ post: { title, body,
imgUrl }, index }) => {
    const [like,setLiked]=useState()
  return (  
    <div >
    <div className="post-container">
      <h1 className="heading">{title}</h1>
      <img className="image" src={imgUrl} alt="post" />
      <p>{body}</p>
      <div className="customContaine">
        <button className="btn btn-primary" onClick={(index)=>{setLiked(index)}}>
        {like===index?"liked":"unlike"}  </button>
        
      </div>
    </div>
    </div>
  );
};
  
export default Post;