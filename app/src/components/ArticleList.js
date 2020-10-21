import React, { useEffect } from 'react';
import Article  from './Article';

import { connect } from 'react-redux';
import { getArticles } from '../actions';

const ArticleList = (props) => {
    useEffect(() => {
        props.getArticles();
    }, [props.getArticles]);

    if (props.isLoading) {
        return (
            <div className="article">
                <progress className="progress is-large is-info" max="100">60%</progress>
            </div>
        )
    }

    return (
        <React.Fragment>
            {
                props.articles.map(article => {
                    return (<Article key={article.id} article={article} />);
                })
            }
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        isLoading: state.isLoading
    };
}

export default connect(mapStateToProps, { getArticles })(ArticleList);