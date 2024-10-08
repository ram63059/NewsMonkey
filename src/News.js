import React ,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=> {
    
    
const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(true)
const [page, setPage] = useState(1)
const [totalResults, setTotalResults] = useState(0)
    

    const updateNews=async ()=>{
      props.setProgress(10);
     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=27fab8c41af24618a73b71f1692f5029&page=${page}&pageSize=${props.pageSize}`
     setLoading(true);
     props.setProgress(30);

     let data=await fetch(url);
     let parsedData= await data.json();
     console.log(parsedData);
     props.setProgress(70);
     setArticles(parsedData.articles)
     setTotalResults(parsedData.totalResults)
     setLoading(false)

    props.setProgress(100);

    }
    useEffect(() => {
      document.title= `${props.category}-NewsMonkey`

      updateNews();

       }, [])
    
  
   
    const fetchMoreData = async () => {

      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=27fab8c41af24618a73b71f1692f5029&page=${page+1}&pageSize=${props.pageSize}`
      setPage(page+1)

     let data=await fetch(url);
     let parsedData= await data.json();
     console.log(parsedData);
     setArticles(articles.concat(parsedData.articles))
     setTotalResults(parsedData.totalResults)
     
    };
  
    return (
      <div className="container my-4 ">
      <h1 className='text-center' style={{marginTop:'90px'}}>  NewsMonkey -Top Headlines</h1>

      {loading &&<Spinner /> }
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>} >
          <div className="container">
      <div className="row my-2">
      { articles.map((element)=>{
        return  <div className="col-md-4 my-4" key={element.url}>
        <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage}  newsUrl={element.url} author={element.author} date={element.publishedAt} />
        </div>
      

        })
      }
        </div>
        </div>
        </InfiniteScroll>
       

      </div>  
    )
  }


News.defaultProps={
  pageSize:8,
  country:"in",
  category:"general",
};

News.propTypes={
  pageSize:PropTypes.number,
  country:PropTypes.string,
  category:PropTypes.string,
};

export default News