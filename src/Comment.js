import React from "react";

const Comment = props => {
  return (
    <li
      className="comment"
      style={{ backgroundColor: "#ccff00", color: "teal" }}
    >
      {props.commentText}
    </li>
  );
};

export default Comment;
