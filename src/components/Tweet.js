import React from 'react';
import TwitterFeed from './TwitterFeed';





const Tweet = props => {


  return(

<div id="tweet_box">

{/* <p id="timestamp_ms">{props.timestamp_ms}</p> */}
<img id="image" src={props.image}/>
<p id="name">{props.name}</p>
<p id="screen">@{props.screen_name}</p>
<p id="text">{props.text}</p>

<button className="fa fa-reply" aria-hidden="true" id="reply" onClick={ (event) => { alert('Reply')} }></button>

<button id="retweet" className="fa fa-retweet" aria-hidden="true" onClick={ (event) => { alert('Retweet')} } ></button>


<p id="rt">{props.retweet_count}</p>
<p id="fave">{props.favorite_count}</p>


<button className="fa fa-heart" aria-hidden="true" id="heart" onClick={ (event) => { alert('Like')} }></button>


<button className="fa fa-ellipsis-h" aria-hidden="true" id="more" onClick={ (event) => { alert('More')} }></button>






</div>


)};



export default Tweet;
