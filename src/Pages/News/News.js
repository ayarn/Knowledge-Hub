import { Button } from '@material-ui/core';
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';

const News = () => {
    const [articles, setArticles] = useState([])

useEffect(() => {
    const getArticles = async () => {
        const res = await Axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=fb2e5e6ac8cd4a17ab9e6cac96dab3aa")
        setArticles(res.data.articles);
        console.log(res);
    };
    getArticles();
}, []);

    return (
        <div align='center'>
            <h1 align='center'><u> * Latest News * </u></h1> 

            <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ alignSelf: "center", marginTop: 20 }}
            href="/Home"
            >
                homepage 
            </Button> 
            &nbsp;&nbsp;&nbsp;
            <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{ alignSelf: "center", marginTop: 20 }}
                href="/"
            >
                logout
            </Button>
            <br /> 
            {articles.map(({ title, description, url, urlToImage}) => (
                <Newsitem 
                title={title}
                description={description}
                url={url}
                urlToImage={urlToImage}
                />
            ))}
        </div>
    );
};

export default News
