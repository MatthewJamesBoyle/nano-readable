import React from 'react';
import TextField from 'material-ui/TextField';


const AddCommentView = (props) => (
        <div>
            <div className="postTitle">Add a new comment!</div>
            <form className="addComments" onSubmit={e => props.handleSubmit(e,e.target.comment.value,e.target.author.value)}>
                    Comment:
                    <TextField rows={4} multiLine={true} name="comment" />
                <label>
                    Author:
                    <TextField type="text" name="author" />
                </label>
                <button>Add a Comment</button>
            </form>
        </div>
);

export default AddCommentView;

