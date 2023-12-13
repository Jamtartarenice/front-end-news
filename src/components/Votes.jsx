import React, { useState, useEffect } from "react";
import sendVotes from "../utils/sendVote";

const Votes = (props) => {
    const [voted, setVote] = useState(false);
    const [currentVotes, setCurrentVotes] = useState(null); 
    const [isLoading, setIsLoading] = useState(false);

    let voteChanger = 0;
    const article_id = props.article_id;

    useEffect(() => {
        setIsLoading(true);

        sendVotes(article_id, 0)
        .then((initialVotes) => {
            setCurrentVotes(initialVotes);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, [article_id]);

    const handleVoteClick = () => {
        setVote(!voted);
        setIsLoading(true);

        if (!voted) 
        voteChanger += 1;
        else 
        voteChanger -= 1;

        setCurrentVotes((prevVotes) => prevVotes + voteChanger);

        sendVotes(article_id, voteChanger)
        .then((newVotes) => {
            setCurrentVotes(newVotes);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    if (isLoading) return <p>Loading...</p>;
    else
    return (
        <button onClick={handleVoteClick}>
            {currentVotes !== null ? currentVotes : "Loading "} votes
        </button>
    );
};

export default Votes;