import React from 'react'
import BlogTitle from './BlogTitle'

type BlogProps = {
    src : string , 
    date : string, 
    postTitle : string,
    postDesc: string 
    
}

function BlogFormat({src , date , postTitle, postDesc} : BlogProps)  {
  return (
    <div className='blogDiv'>
      <img className='blogImg' src={src}></img>
      <p className='blogSpan'><span>{date}</span></p>
      <h2 className='blogh2'>{postTitle}</h2>
      <p className='blogp'>{postDesc}<a href="#home" >......<b className='more'>Read More</b></a></p>
    </div>
  )
}

export default BlogFormat
