import axios from 'axios';

export const getArticles = () => dispatch => {
    dispatch({ type: "FETCHING_ARTICLES_START" });
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(resp => {
            const articleIds = resp.data.slice(0, 25);
            const articles = [];
            const promises = [];
            articleIds.forEach(id => {
                promises.push(
                    axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                    .then(resp => {
                        const article = resp.data;
                        articles.push({title: article.title, type: article.type, url: article.url, id: article.id});
                    })
                    .catch(err => {
                        console.log(err);
                    })
                )
            })
            Promise.all(promises).then(() => {
                dispatch({ type: "FETCHING_ARTICLES_SUCCESS", payload: articles });
            })
        })
        .catch(err => {
            dispatch({ type: "FETCHING_ARTICLES_FAILURE", payload: err.response.message });
            console.log(err);
        })
}