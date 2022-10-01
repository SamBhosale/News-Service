import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgSrc, readMore, author, publishedAt, source } = this.props;
        return (
            <>
                <div className=" my-9 container text-center " >


                    <div className="card  "  >
                        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%" ,zIndex:'1'}}>
                            {source}
                        </span>

                        <img src={imgSrc} className="card-img-top" alt="..." />

                        <div className="card-body ">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">  By <strong><i>{!author ? "Unkoun" : author} </i></strong> and Publish at <strong>{new Date(publishedAt).toGMTString()}</strong></small></p>
                            <a rel="noreferrer" href={readMore} target="_blank" className="btn btn-primary btn-sm">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
