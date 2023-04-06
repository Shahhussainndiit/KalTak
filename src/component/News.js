// import React, { Component } from "react";
import React, { useEffect, useState} from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 6,
//     category: "general",
//   };
//   static propsTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };

const News = (props)=>{
  const [articles, setArticles]= useState([])
  const [loading, setLoading]= useState(true)
  const [page, setPage]= useState(1)
  const [totalResults, setTotalResults]= useState(0)
 
  const  captialize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // constructor(props) {
    // super(props);
    // this.state = {
    //   articles: [],
    //   loading: true,
    //   page: 1,
    //   totalResults:  0
    // }; 
    //  document.title = `${this.captialize(this.props.category)} - KalTak`;
  // }

  // async updateNews() {
  //   this.props.setProgress(10)
  //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   this.props.setProgress(30)
  //   let parsedData = await data.json();
  //   this.props.setProgress(50)
  //   this.setState({
  //     articles: parsedData.articles,
  //     totalResults: parsedData.totalResults,
  //     loading: false,
  //   });
  //   this.props.setProgress(100)
  // }

  const updateNews = async ()=> {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json();
    props.setProgress(50)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)

    props.setProgress(100)
  }

  useEffect(()=>{
    document.title = `${captialize(props.category)} - KalTak`;
    updateNews();
    // eslint-disable-next-line
  },[])

  // async componentDidMount() {
  //   this.updateNews();
  // }

  //  fetchMoreData = async() => {
  //     this.setState({page: this.state.page + 1})
  //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //       let data = await fetch(url);
  //       let parsedData = await data.json();
  //       this.setState({
  //         articles: this.state.articles.concat(parsedData.articles),
  //         totalResults: parsedData.totalResults,
  //         loading: false,
  //     });
  // };

   const fetchMoreData = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
  };

  // render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px 0px", marginTop: "90px"}}>
          {/* KalTak - Top {this.captialize(this.props.category)} HeadLines */}
          KalTak - Top {captialize(props.category)} HeadLines
        </h1>
        {/* {this.state.loading && <Spinner />} */}
        {loading && <Spinner />}
        {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}>
          <div className="container"> */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}>
          <div className="container">

        <div className="row">
          {/* {this.state.articles.map((element) => { */}
          {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={element.description? element.description.slice(0, 88): ""}imageUrl={element.urlToImage} newsUrl={element.url}author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
              )
            })}
        </div>
        </div>
        </InfiniteScroll>
      </div>
    );
  // }
}

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
News.propsTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
