import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

const CommentBox = ({ saveComment, fetchComments }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    saveComment(comment);
    setComment("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea
          onChange={(e) => {
            setComment(e.target.value);
          }}
          value={comment}
        />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={fetchComments}>Fetch Comments</button>
    </div>
  );
};

export default connect(null, actions)(CommentBox);
