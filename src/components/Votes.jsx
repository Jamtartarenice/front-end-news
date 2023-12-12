import { useState } from "react";
import SendVotes from "../utils/SendVote";

const Votes = (props) => {
    const [hasVoted,SetVote] = useState(false);
    const [hasClicked,setClicked] = useState(false);
    const [currentVotes,setCurrentVotes] = useState(props.article_vote);
    let voteChanger = 0;
    const article_id = props.article_id;

    if(hasClicked){ 
        if(hasVoted)
        voteChanger+=1;
        else
        voteChanger-=1;

        SendVotes(article_id,voteChanger).then(setCurrentVotes)
        setClicked(false);
    }

    return <button onClick={() => {SetVote(!hasVoted); setClicked(true)}}>
            {currentVotes} Votes
        </button>
};

export default Votes