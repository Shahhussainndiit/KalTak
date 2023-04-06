// import React, { Component } from 'react'
import React from 'react'

// export class NewsItem extends Component {
const NewsItem = (props)=> {
  
  // render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = props; 
    return (
      <div className='my-3'>
          <div className="card" > {/* style={{width: "18rem", height: "28rem"}} */}
            <img src={!imageUrl?"https://images.indianexpress.com/2023/03/Ultramassive-black-hole-20230330.jpg": imageUrl} className="card-img-top" alt="news-images" style={{height: '250px'}}/>
            <div className="card-body">
              <h5 className="card-title">{title}<span className="badge rounded-pill text-bg-dark mx-2">{source}</span></h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-body-secondary">By {!author? "Unknown": author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target='_blank ' className="btn btn-sm btn-dark my-3">Read More</a>
            </div>
          </div>
      </div>
    )
  // }
}

export default NewsItem