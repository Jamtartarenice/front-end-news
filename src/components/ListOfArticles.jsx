import getArticles from "../utils/getArticles";
import { useState ,useEffect} from "react";
import Loading from "./Loading";
import formatDate from "../utils/FormatDates";
import { Link } from 'react-router-dom'

const ListOfArticles = () => {
    const [articles,setArticles] = useState([]);

    useEffect(() => {
        getArticles(setArticles)
    },[]);
    
    return <Loading>
        <ul>
            {articles.map(article => <li className='InListOfArticles' key={article.article_id}>
                <Link to={`/article/${article.article_id}`}>
                <div className="Title">{article.title} </div>
                <div className="DateOfPost">{formatDate(article.created_at)}</div>
                <div className="VotesOfPost">{article.votes} votes</div>
                </Link>
                </li> )}
        </ul>
    </Loading>
};

export default ListOfArticles;