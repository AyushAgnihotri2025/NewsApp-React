import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = { articles: [], loading: false };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d919b28ed32b43baad717e2c2d12d5ff";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h3
          style={{
            marginBottom: "10px",
            paddingTop: "5px",
            paddingBottom: "5px",
            marginTop: "10px",
          }}
        >
          NewsInshort - Top Headlines
        </h3>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : " "}
                  description={element.description ? element.description : " "}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                ></NewsItem>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
