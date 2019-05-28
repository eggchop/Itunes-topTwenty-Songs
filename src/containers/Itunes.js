import React, {Component} from "react";
import ItunesTopTwenty from "../components/ItunesTopTwenty"

class Itunes extends Component{

  constructor(props){
    super(props);
    this.state = {
      topTwenty: []
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
    .then((res) => res.json())
    .then((songs) => {
      this.setState({ topTwenty: songs.feed.entry });
    })
  }

  render(){
    return(
    <div>
    <h1>UK Top 20 Chart</h1>
    <ItunesTopTwenty tunes={this.state.topTwenty}/>
    </div>
  );}

}

export default Itunes;
