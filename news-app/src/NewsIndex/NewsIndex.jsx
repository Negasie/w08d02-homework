import React, { Component } from 'react';
import NewsSearchForm from './NewsSearchForm';
import NewsList from './NewsList';


class NewsIndex extends Component{
  constructor(){
    super();
    this.state = {
    	news: []
    }
    }
        getNews = async () => {
        try {
          const news = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=0ef0858e80ba4826b1be72c6d680d992");
          const newsJson = await news.json();
          return newsJson;
        return news
        } catch(err) {
          console.log(err);
          return err;
        }
      }
  componentDidMount(){
    this.getNews().then((data) => {
      this.setState({news: data.articles})
      console.log(this.state.news)
    });
  }






  render() {
    return (
      <div className="App">
              <br></br>              
              <NewsSearchForm news={this.state.news.articles} />
              <br></br>
        <NewsList news={this.state.news} />

      </div>
    );
  }
}













export default NewsIndex;