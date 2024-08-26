import React from 'react'

const NewsItem  =(props)=> {
  

    let { title ,description,imgUrl,newsUrl,author,date}=props;
    return (
      <div>
      <div className="card" >
            <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}..</h5>
                <p className="card-text">{description}.. </p>
                <a href={newsUrl} target="_blank" className="btn btn-dark">Read more</a>
                <p className="card-text"><small className="text-body-secondary">by {!author?"Uknown":author} on {new Date(date).toGMTString()}</small></p>

            </div>
            </div>
                    
      </div>
    )
  
}

export default NewsItem