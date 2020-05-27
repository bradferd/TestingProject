import React, { useState } from 'react';
import { connect } from 'react-redux'
import * as actions from 'actions';

const CommentBox = ({ saveComment }) => {
    const [comment, setComment] = useState("");

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            saveComment(comment);
            setComment('');
        }}>
            <h4>Add a Comment</h4>
            <textarea onChange={e => {
                setComment(e.target.value);
            }} value={comment} />
            <div>
                <button>Submit Comment</button>
            </div>
        </form>
    );
}

export default connect(null, actions)(CommentBox);