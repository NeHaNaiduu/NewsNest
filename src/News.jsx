import { useEffect, useState } from "react";
import NewsCard from "./NewsCard.jsx";

const  NewsGrid=({category})=>{
    const[articles,setArticles]=useState([]);

    useEffect(()=>{
            let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f24c68a9b4964acd9e7fcd3f6a5662d1`;

            fetch(url)
            .then(res=>res.json())
            .then(data=>setArticles(data.articles))
    },[category])

    return(
        <div>
            <h2 style={{fontSize:"40px"}}>Latest</h2>
            <div className="news-grid">
                {articles.map((news,index)=>{
                    return <NewsCard key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
                })}
            </div>
        </div>
    )
}

export default NewsGrid;