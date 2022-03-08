import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


export default class News extends Component {
   articles=[]
   
   static defaultProps = {
      country: "in",
      pageSize: 5,
      category: "general"
    }

    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
    }
         
    constructor(props){
      super(props)
      console.log("hello");
      this.state={
         articles: this.articles,
         loading: false,
         page:1,
         totalResults:0
      }
      document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Monkey`;
    }

    capitalizeFirstLetter=(string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

      async componentDidMount(){
         this.updateNews();
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b495020c1c4e4c429c8774341ce30596&page=1&pageSize=${this.props.pageSize}`; 
      // this.setState({loading:true})
      // let data = await fetch(url);
      // let parsedData = await data.json()
      // console.log("from cdm");
      // console.log(parsedData);
      // this.setState({
      //    articles:parsedData.articles,
      //    totalResults: parsedData.totalResults,
      //    loading:false
      // })
     }

     //check when pageSize is changed, not correct value is returned for the articles.
     // NEXT not working correctly
     // general category is not working

     // 192.168.0.107:3000/

async updateNews(){
   var test = process.env.REACT_NEWS_API_KEY;
   this.props.setProgress(10);
   const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`; 
   this.setState({loading:true});
   let data = await fetch(url);
   this.props.setProgress(30);
   let parsedData = await data.json()
   this.props.setProgress(50);
   this.setState({
      articles:parsedData.articles,
      page:this.state.page+1,
      loading:false})
   this.props.setProgress(100);
   }

     handleNextClick = async ()=>{
      console.log("Next click");
      // if(!(this.state.page+1> Math.ceil(this.state.totalResults/30)))
      // {
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b495020c1c4e4c429c8774341ce30596&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`; 
      // this.setState({loading:true})
      // let data = await fetch(url);
      // let parsedData = await data.json()
      // console.log("from cdm");
      // console.log(parsedData);
      // this.setState({
      //    articles:parsedData.articles,
      //    page:this.state.page+1,
      //    loading:false})
      this.setState({
           page:this.state.page+1
   });
   this.updateNews();
}

     handlePrevClick = async ()=>{
         console.log("Previous click");
         // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b495020c1c4e4c429c8774341ce30596&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`; 
         // this.setState({loading:true})
         // let data = await fetch(url);
         // let parsedData =  await data.json()
         // console.log("from cdm");
         // console.log(parsedData);
         // this.setState({
         //    articles:parsedData.articles,
         //    page:this.state.page-1,
         //    loading:false})
            this.setState({
               page:this.state.page-1
       });
       this.updateNews();
    }

    fetchMoreData = async() => {
       this.setState({page:this.state.page+1})
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b495020c1c4e4c429c8774341ce30596&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`; 
         this.setState({loading:true})
         let data = await fetch(url);
         let parsedData =  await data.json()
         console.log("from cdm");
         console.log(parsedData);
         this.setState({
            articles:this.state.articles.concat(parsedData.articles),
            page:this.state.page-1,
            loading:false})
    };

      
    render() {
    return (     
      <div className="container my-3">
      <h1 className="text-center" style={{margin:'35px 0px'}} >NewsFunky - Top News on {this.capitalizeFirstLetter(this.props.category)}</h1>
      {/* { this.state.loading &&  <Spinner/> } */}
      
      <div className="row">
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles!==this.state.totalResults}
          loader={ <Spinner/> }
        >
      {/** { !this.state.loading && this.state.articles.map((element)=>{  */}
      { this.state.articles.map((element)=>{ 
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0,45):""} 
                        description={element.description?element.description.slice(0,88):""}
                        imageURL= {element.urlToImage} newsURL={ element.url } author={element.author} date={element.publishedAt}/>
      
                        </div>
                        })}                      
     
   </InfiniteScroll>
    </div>
    
    <div className="container d-flex justify-content-around">
    <button disabled={this.state.page<=1} type="button" className="btn btn-dark"   onClick= {this.handlePrevClick} >&larr; Previous</button>
    <button disabled={ this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize) } type="button" className="btn btn-dark" onClick= {this.handleNextClick}>&rarr; Next </button>
    </div>  
    </div>
  
    )
  }
}

