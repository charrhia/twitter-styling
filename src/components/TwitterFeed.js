import React from 'react';
import Tweet from './Tweet';


const TwitterFeed = props => {



let tweetArray = props.data.map(tweet => {


// var date = {tweet.timestamp_ms};
// var dateToStr = date.toUTCString().split(' ');
// var cleanDate = dateToStr[2] + ' ' + dateToStr[1];
//


  return(
    <Tweet
      name={tweet.user.name}
      timestamp_ms={tweet.timestamp_ms}
      text={tweet.text}
      retweet_count={tweet.retweet_count}
      favorite_count={tweet.favorite_count}
      screen_name={tweet.user.screen_name}
      image={tweet.user.profile_image_url}
    />
  )
})

return(

<div>

  <h1>Twitter Feed</h1>







{tweetArray}
</div>

)};


export default TwitterFeed;
