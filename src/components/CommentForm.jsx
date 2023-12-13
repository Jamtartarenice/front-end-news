import { useState  } from "react";
import sendComment from "../utils/sendComment";

const CommentForm = (props) => {
    const article_id = props.article_id;
    const comments = props.comments;
    const [ commentInput, setCommentInput ] = useState('');
    const [ username, setUsername ] = useState('');
    
    const handleUsernameChange = (event) => setUsername(event.target.value);
    
    const handleCommentChange = (event) => setCommentInput(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        sendComment(article_id, commentInput, username)
        .then(data => {
            comments.push(data);
        });
        setCommentInput('');
        setUsername('');
    };

    return <><form className="commentForm" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter your username"
            />
    
            <label htmlFor="comment">Comment:</label>
            <input
                type="text"
                id="comment"
                name="comment"
                value={commentInput}
                onChange={handleCommentChange}
                placeholder="Enter your comment"
            />

            <button type="submit">Submit</button>
        </form>
        </>
}

export default CommentForm;
