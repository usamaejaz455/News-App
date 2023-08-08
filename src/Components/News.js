import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=ae00a0bd1d3a4197bc09dacbe024a80d";
      let data = await fetch(url);
      let parsedData= await data.json()
      console.log(parsedData);
      this.setState({articles:parsedData.articles})
  }

  render() {
    return (
      <div className="container my-4">
        <h3>Hello!Welcome to News Headlines</h3>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col md-4" key={element.url}>
                <NewsItems
                  title={element.title}
                  description={element.description}
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default News;
