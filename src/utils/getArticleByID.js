import axios from 'axios'

function getArticleByID(setItem, article_id) {
    axios.get(`https://jakub-news-web.onrender.com/api/articles/${article_id}`)
    .then((response) => {
        setItem(response.data.article)
    });
}

export default getArticleByID;