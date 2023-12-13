import getComments from "../utils/getCommentsByID";
import { useState ,useEffect } from "react";
import { useParams } from 'react-router-dom'
import formatDate from "../utils/FormatDates";
import CommentForm from "./CommentForm";

const CommentSection = () => {
    const [isLoading,setIsLoading] = useState(true);
    const [comments,setComments] = useState([]);
    const  {article_id} = useParams();

    useEffect(() => {
        getComments(article_id)
        .then(data => {
            setComments(data)
            setIsLoading(false);
        });
    },[comments]);

    if(isLoading) return <p>Loading Comments...</p>
    else
    return <>
        <div className="commentSection">
            <p>     There are {comments.length} comments</p>
            <ul className="comment">
                <CommentForm article_id={article_id} comments={comments}/>
                {comments.map(comment => <li key={comment.comment_id}>
                    <h3>Comment by {comment.author} on {formatDate(comment.created_at)}</h3>
                    <p>{comment.body}</p>
                </li>)}
            </ul>
        </div>
    </>
};

export default CommentSection;