import React from 'react';

const Article = (props) => {
    return (
        <div onClick={() => {window.open(props.article.url, '_blank');}} className="box article">
            <div className="content">
                <div className="container">
                    <h3 className="title is-4">{props.article.title}</h3>
                </div>
                <span className="subtitle is-5">{props.article.type.toUpperCase()}</span>
            </div>
        </div>
    )
}

export default Article;