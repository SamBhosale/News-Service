import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    constructor() {
        super();
        // console.log('hello news');
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,

        }
    }

    async updateNews() {
        this.props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c88856fab17545419a3a0501eaadf886&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.props.setProgress(30);
        let data = await fetch(url);
        let parseData = await data.json();
        // console.log(parseData);
        this.props.setProgress(50);
        this.setState({ loading: true })

        this.setState({
            // page: this.state.page - 1,
            page: this.state.page,
            totalResults: parseData.totalResults,
            articles: parseData.articles,
            loading: false
        })
        this.props.setProgress(100);
    }
    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1,
        })
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c88856fab17545419a3a0501eaadf886&page=${this.state.page}&pageSize=${this.props.pageSize}`



        let data = await fetch(url);
        let parseData = await data.json();
        // console.log(parseData);
        // this.setState({ loading: true })

        this.setState({
            // page: this.state.page - 1,
            totalResults: parseData.totalResults,
            articles: this.state.articles.concat(parseData.articles),
            // loading: false
        })

    };

    async componentDidMount() {
        // console.log('componentDidMount');
        // // let url = ` https://newsapi.org/v2/everything?q=keyword&apiKey=c88856fab17545419a3a0501eaadf886&page=1&pageSize=${this.props.pageSize}`;

        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c88856fab17545419a3a0501eaadf886&page=1&pageSize=${this.props.pageSize}`

        // let data = await fetch(url);
        // let parseData = await data.json();
        // console.log(parseData);

        // this.setState({loading : true})

        this.setState({
            // page : this.state.page,
            // articles: parseData.articles,
            // totalResults : parseData.totalResults,
            loading: false,
        });
        this.updateNews();
    }

    // handlePrevClick = async () => {
    //     // console.log('previous click');
    //     // if(totalResults/pageSize >= totalResults)

    //     // let url = ` https://newsapi.org/v2/everything?q=keyword&apiKey=c88856fab17545419a3a0501eaadf886&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;

    //     // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c88856fab17545419a3a0501eaadf886&page=${this.state.page - 1 }&pageSize=${this.props.pageSize}`



    //     // let data = await fetch(url);
    //     // let parseData = await data.json();
    //     // // console.log(parseData);
    //     // this.setState({loading : true})

    //     this.setState({
    //         page: this.state.page - 1,

    //     })
    //     this.updateNews();

    // }

    // handleNextClick = async () => {
    //     // // console.log('Next click');
    //     // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
    //     // {

    //     //     // let url = ` https://newsapi.org/v2/everything?q=keyword&apiKey=c88856fab17545419a3a0501eaadf886&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

    //     //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c88856fab17545419a3a0501eaadf886&page=${this.state.page + 1 }&pageSize=${this.props.pageSize}`


    //     //     let data = await fetch(url);
    //     //     let parseData = await data.json();
    //     // console.log(parseData);
    //     //     this.setState({loading : true})

    //     this.setState({
    //         page: this.state.page + 1,

    //     })
    //     this.updateNews();
    //     // console.log(this.parseData);

    // }
    render() {
        // console.log('reder')
        return (
            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.lenght !== this.state.totalResults}
                // loader={<Spinner />}
            >
                <div>
                    <h2 className="container text-center my-3"> {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1) + " "}Top News of News_Time</h2>

                    {/* {this.state.loading && <Spinner />} */}

                    <div className="  row container">
                        {this.state.articles.map((Element) => {
                            return <div className=" container  col-md-4 my-3 " key={Element.url}>

                                <NewsItem title={Element.title} description={Element.description} imgSrc={Element.urlToImage}
                                    readMore={Element.url} publishedAt={Element.publishedAt} author={Element.author} source={Element.source.name}>  </NewsItem>


                            </div>

                        })}

                        {/* <div className="  d-flex justify-content-between" >
                            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                            
                            <button disabled={this.state.page + 1 >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
                        </div> */}

                    </div>


                </div>
            </InfiniteScroll>
        )
    }
}

export default News
