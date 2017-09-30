import React from 'react';

const AddCommentView = (props) => (
        <div>
            <form onSubmit={e => props.handleSubmit(e,e.target.comment.value,e.target.author.value)}>
                <label>
                    Comment:
                    <textarea rows="4" cols="50" name="comment" />
                </label>
                <label>
                    Author:
                    <input type="text" name="author"  />
                </label>
                <button>Add a Comment</button>
            </form>
        </div>
);

export default AddCommentView;

