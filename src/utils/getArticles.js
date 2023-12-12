import axios from 'axios'

function getArticles(setItem) {
        axios.get('https://jakub-news-web.onrender.com/api/articles')
        .then((response) => {
            setItem(response.data.articles)
        });
}

export default getArticles;