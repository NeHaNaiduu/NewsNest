import React from 'react'

const NewsCard=({title,description,src,url}) =>{
  return (
    <div className='news-item'>
        <img src={src} alt="" className='news-image'/>
        <div>
            <h5>{title}</h5>
            <p>{description}</p>
            <a href={url}>Read more</a>
        </div>
    </div>
  )
}

export default NewsCard