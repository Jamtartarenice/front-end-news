import axios from 'axios'

function getCommentsByID(article_id) {
        return axios.get(`https://jakub-news-web.onrender.com/api/articles/${article_id}/comments`)
        .then((response) => {
            return response.data.comments[1]
        });
}

export default getCommentsByID;