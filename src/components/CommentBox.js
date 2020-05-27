import React, { useState } from 'react';

export default (props) => {
    const [comment, setComment] = useState("");

    return (
        <form onSubmit={(e) => {
            e.preventDefault();

            // TODO - Call an action creator
            // Save the comment
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