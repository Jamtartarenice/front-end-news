import axios from 'axios'

function sendVotes(article_id, passed_body,passed_username) {
        return axios.post(`https://jakub-news-web.onrender.com/api/articles/${article_id}/comments`, { 
            body: passed_body, 
            username: passed_username
        })
        .then((response) => {
            return response.data.comment
        });
}

export default sendVotes;