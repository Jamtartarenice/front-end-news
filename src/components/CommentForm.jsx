import React, { useState } from "react";
import sendComment from "../utils/sendComment";

const CommentForm = (props) => {
  const article_id = props.article_id;
  const comments = props.comments;

  const [commentInput, setCommentInput] = useState("");
  const [username, setUsername] = useState("grumpy19");
  const [disableForm, setDisableForm] = useState(false);
  const [offlineMessage, setOfflineMessage] = useState("");

  const handleCommentChange = (event) => setCommentInput(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (navigator.onLine) {
      setDisableForm(true);

      sendComment(article_id, commentInput, username)
        .then((data) => {
          comments.push(data);
          setCommentInput("");
          setDisableForm(false);
        })
        .catch((error) => {
          console.error("Error sending comment:", error);
          setDisableForm(false);
        });
    } else {
      setOfflineMessage(
        "You are currently offline. Your comment will be sent when the connection is restored."
      );
    }
  };

  return <>
        <form className="commentForm" onSubmit={handleSubmit}>
            <label htmlFor="comment">Comment:</label>
            <textarea
                type="text"
                id="comment"
                name="comment"
                value={commentInput}
                onChange={handleCommentChange}
                placeholder="Enter your comment"
                disabled={disableForm}
            />

            <button type="submit" disabled={commentInput.length === 0}>
                Submit
            </button>
        </form>

        {offlineMessage && <p style={{ color: "red" }}>{offlineMessage}</p>}
    </>
};

export default CommentForm;