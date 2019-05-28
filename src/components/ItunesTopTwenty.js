import React from "react";
import ArtistInfo from "./ArtistInfo";

const ItunesTopTwenty = function(props){

  const topSongs = props.tunes.map((entry, index) => {
    return(
    <ArtistInfo
    title = {entry.title.label}
    artist = {entry["im:name"].label}
    position = {index}
    key = {index}
    >
    </ArtistInfo>)
  });

  return(
    <div>
    {topSongs}

    </div>
  );

}

export default ItunesTopTwenty;
