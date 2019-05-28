import React from "react";

const ArtistInfo = function(props){
  return(
    <div>
    <p>{props.position + 1}.{props.title}</p>
    </div>
  )
}

export default ArtistInfo;
