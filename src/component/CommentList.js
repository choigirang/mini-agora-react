import React from "react";
import Comment from "./Comment";

const CommentList = ({ list }) => {
  return (
    <div className="comment-list">
      {console.log("CommentList에 전달하는 list는", list)}
      {list.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
