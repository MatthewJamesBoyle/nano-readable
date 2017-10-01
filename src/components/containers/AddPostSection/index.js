import React, {Component} from 'react';
import {connect} from 'react-redux';
import {newPost} from '../../../actions/posts';
import uuid from 'uuid';
import TextField from 'material-ui/TextField';



 class AddPostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            body:'',
            author:'',
            category:'',
            valid:false,
        };
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <TextField type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    </label>
                    <label>
                        Body:
                        <TextField rows={4} multiLine={true} name="body" value={this.state.body} onChange={this.handleChange} />
                    </label>
                    <label>
                        Author:
                        <TextField type="text" name="author" value={this.state.author} onChange={this.handleChange} />
                    </label>
                    <label>
                        Category:
                        <TextField type="text" name="category" value={this.state.category} onChange={this.handleChange} />
                    </label>
                    <button>Add a post</button>
                </form>
            </div>
        )
    }
    
    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        })     
    }

    validateInput = () => {
        Object.keys(this.state).forEach(key => {
        
            if(this.state[key].length < 4){
                return false;
            }

        })
        return true;
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.validateInput()) {
            console.log("all fields need to be atleast 3 characters.");
            return;
        }
        const postToAdd = {
            id: uuid(),
            timestamp: Date.now(),
            title: this.state.title,
            body: this.state.body,
            author: this.state.author,
            category: this.state.category,
        };
        
      this.props.newPost(postToAdd);
    }
}

export default connect(null,{newPost})(AddPostForm);