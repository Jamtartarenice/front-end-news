import getAnArticle from "../utils/getAnArticle";
import { useState ,useEffect } from "react";
import Loading from "./Loading";
import { useParams } from 'react-router-dom'
import formatDate from "../utils/FormatDates";
import Comments from "./Comments";

const ArticlePage = () => {
    const [article,setArticle] = useState({});
    const  {article_id} = useParams();

    useEffect(() => {
        getAnArticle(setArticle, article_id * 1);
    },[]);

    return <Loading>
        <div className="singleArticle">
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <p>made by {article.author} at {formatDate(article.created_at)}</p>
        </div>
        <Comments />
    </Loading>
};

export default ArticlePage;