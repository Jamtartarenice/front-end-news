import getComments from "../utils/getComments";
import { useState ,useEffect } from "react";
import Loading from "./Loading";
import { useParams } from 'react-router-dom'
import formatDate from "../utils/FormatDates";

const CommentSection = () => {
    const [comments,setComments] = useState([]);
    const  {article_id} = useParams();

    useEffect(() => {
        getComments(setComments, article_id * 1);
    },[]);

    return <Loading>
        <div className="commentSection">
            <ul>
                {comments.map(comment => <li className="comment"key={comment.comment_id}>
                    <h3>Comment by {comment.author} at {formatDate(comment.created_at)}</h3>
                    <p>{comment.body}</p>
                </li>)}
            </ul>
        </div>
    </Loading>
};

export default CommentSection;