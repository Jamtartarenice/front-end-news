import getArticleByID from "../utils/getArticleByID";
import { useState ,useEffect } from "react";
import { useParams } from 'react-router-dom'
import formatDate from "../utils/FormatDates";
import Comments from "./Comments";
import Votes from "./Votes"

const ArticlePage = () => {
    const [article,setArticle] = useState({});
    const  {article_id} = useParams();
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        getArticleByID(setArticle, article_id);
        setIsLoading(false);
    },[]);

    if(isLoading) return <p>Loading Article Page</p>
    else
    return <>
        <div className="singleArticle">
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <p>made by {article.author} at {formatDate(article.created_at)}</p>
        <Votes article_vote={article.votes} article_id={article.article_id}/>
        </div>
        <Comments />
    </>
};

export default ArticlePage;