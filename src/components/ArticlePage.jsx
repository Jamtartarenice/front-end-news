import getArticleByID from "../utils/getArticleByID";
import { useState ,useEffect } from "react";
import { useParams } from 'react-router-dom'
import formatDate from "../utils/FormatDates";
import Comments from "./Comments";

const ArticlePage = () => {
    const [article,setArticle] = useState({});
    const  {article_id} = useParams();
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        getArticleByID(setArticle, article_id);
        setIsLoading(false);
    },[]);

    if(isLoading) return <p>Loading...</p>
    else
    return <>
        <div className="singleArticle">
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <p>made by {article.author} at {formatDate(article.created_at)}</p>
        <p>{article.votes} votes</p>
        </div>
        <Comments />
    </>
};

export default ArticlePage;