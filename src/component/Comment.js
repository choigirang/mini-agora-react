import React from "react";

const Comment = ({ comment }) => {
  const { id, category, it } = comment;

  return (
    <div className="comment">
      <div className="comment content">{id}</div>
      <div className="comment content">{category}</div>
      <div className="comment content">{it}</div>
    </div>
  );
};

export default Comment;
