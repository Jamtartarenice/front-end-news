import getArticleByID from "../utils/getArticleByID";
import { useState ,useEffect } from "react";
import Loading from "./Loading";
import { useParams } from 'react-router-dom'
import formatDate from "../utils/FormatDates";
import Comments from "./Comments";

const ArticlePage = () => {
    const [article,setArticle] = useState({});
    const  {article_id} = useParams();

    useEffect(() => {
        getArticleByID(setArticle, article_id);
    },[]);

    return <Loading>
        <div className="singleArticle">
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <p>made by {article.author} at {formatDate(article.created_at)}</p>
        <p>votes {article.votes}</p>
        </div>
        <Comments />
    </Loading>
};

export default ArticlePage;