import React, { Component } from "react";
import Newscomponent from "./Newscomponent";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}-NewsMonkey`;
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  async update() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7662a4c67f9540aa819734a116ea77d2&${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  // just doing some changes to check how it works on git hub
  async componentDidMount() {
    this.update();
  }
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7662a4c67f9540aa819734a116ea77d2&${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };
  // these functions would have been used if next and previous buttons are used
  // handlePrvclick = async () => {
  //   this.setState({page: this.state.page-1})
  //   this.update()
  // };
  // handleNxtclick = async () => {
  //   this.setState({page: this.state.page+1})
  //   this.update()
  // };
  render() {
    return (
      <div className="container my-8">
        <div className="text-center" style={{marginTop:'90px'}}>{this.state.loading && <Spinner />}</div>
        <h2 className="text-center my-5" style={{marginTop:'90px'}}>
          Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row mt-3 ">
              {this.state.articles.map((element, idx) => {
                return (
                  <div className="col-md-4 my-3" key={idx}>
                    <Newscomponent
                      title={element.title ? element.title.slice(0, 23) : " "}
                      content={
                        element.content ? element.content.slice(0, 89) : "    "
                      }
                      imgUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://cdn.arstechnica.net/wp-content/uploads/2022/12/Fire-TV-on-Echo-Show_-760x380.jpg"
                      }
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* if we used pervious and next button instead of infinte scroll */}
        {/* 
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrvclick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNxtclick}
          >
            Next &rarr;
          </button> */}
        {/* </div> */}
      </div>
    );
  }
}

export default News;
