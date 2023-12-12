import axios from 'axios'

function getComments(setItem,article_id) {
        axios.get(`https://jakub-news-web.onrender.com/api/articles/${article_id}/comments`)
        .then((response) => {
            setItem(response.data.comments[1])
        });
}

export default getComments;