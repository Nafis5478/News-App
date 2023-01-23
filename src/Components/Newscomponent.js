import React, { Component } from "react";

export class Newscomponent extends Component {
  render() {
    let { title, content, imgUrl, newsurl, author, date, source } = this.props;
    return (
      <div className=" my-3={value.toString()}">
        <h6><span className="badge badge-secondary" style={{color:"green"}}>{source}</span></h6>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{content}...</p>
            <p className="card-text">
              <small className="text-muted">
                Last updated on {new Date(date).toGMTString()} by{" "}
                {author ? author : "Unknown"}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newscomponent;
