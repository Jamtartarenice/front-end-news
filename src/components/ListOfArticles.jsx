import getArticles from "./getArticles";
import { useState ,useEffect} from "react";

const ListOfArticles = () => {
    const [articles,setArticles] = useState([]);

    useEffect(() => {    
        getArticles(setArticles)
        console.log('it works')
    },[]);

    return <ul>
        {articles.map(article => <li className='InListOfArticles' key={article.article_id}>{article.title}</li> )}
    </ul>
};

export default ListOfArticles;