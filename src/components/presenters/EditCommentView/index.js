import React,{Component} from 'react';

class EditCommentView extends Component { 
   
    constructor(props) {
        super(props);
        const {comment} = this.props;
        this.state = {
            id: comment.id,
            body: comment.body,
        };
    }

    render() {
    const {onEditPressed} = this.props;
      return(
        <div>
        <h1>Edit Comment</h1>
        <form onSubmit={e => onEditPressed(e,this.state)}>
                    <label>
                        Body:
                        <textarea rows="4" cols="50" name="body" value={this.state.body} onChange={this.handleChange} />
                    </label>
                    <button>Edit Comment</button>
        </form>  
        </div>    
        );
}

handleChange = (event) => {
    const value = event.target.value;
    this.setState({
        body: value,
        })     
    }
}

export default EditCommentView;