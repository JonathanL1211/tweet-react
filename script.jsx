class Tweets extends React.Component{
    render(){
        console.log("TWEETS THIS.PROPS: ", this.props);
        return(
            <div>
                <img src="ye.jpg"/>
                <div className="tweet-contents">
                    <h3><span>{this.props.details.user.name} </span><span>@{this.props.details.user.screen_name}</span></h3>
                    <p>{this.props.details.text}</p>
                    <p><span>Retweets: {this.props.details.retweet_count} | Liked: {this.props.details.favorite_count}</span></p>
                </div>
                <br/>
                <hr/>
            </div>
        );
    }
}


class Container extends React.Component{
    render(){
        console.log("CONTAINER THIS.PROPS: ", this.props);
        let listTweets = this.props.items.map(items => {
            return <Tweets details={items} key={items.id}/>
        })
        return (
            <div className="wrapper">
                <nav><h3>{tweets[0].user.name}</h3></nav>
                 <ul>
                    {listTweets}
                </ul>
            </div>
        );
    }
}
ReactDOM.render(
    <Container items={tweets}/>,
    document.getElementById('root')
);
