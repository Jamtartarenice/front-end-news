import axios from 'axios'

function SendVotes(article_id, passed_vote) {
        return axios.patch(`https://jakub-news-web.onrender.com/api/articles/${article_id}`, {inc_votes : passed_vote})
        .then((response) => {
            return response.data.result.votes
        });
}

export default SendVotes;