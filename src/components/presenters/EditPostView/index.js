import React,{Component} from 'react';

class EditPostView extends Component { 
   
    constructor(props) {
        super(props);
        const {post} = this.props
        this.state = {
            id: post.id,
            title: post.title,
            body: post.body,
            author: post.author,
            category: post.category,
        };
    }

    render() {
    const {post,onEditPressed} = this.props;
      return(
        <div>
        <h1>Edit Post</h1>
        <form onSubmit={e => onEditPressed(e,this.state)}>
                    <label>
                        Title:
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    </label>
                    <label>
                        Body:
                        <textarea rows="4" cols="50" name="body" value={this.state.body} onChange={this.handleChange} />
                    </label>
                    <button>Edit post</button>
        </form>  
        </div>    
        );
}

handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = event.target.value;
    this.setState({
        [name]: value,
        })     
    }
}

export default EditPostView;