import React from 'react';
import Tweet from './Tweet';


const TwitterFeed = props => {

let newDate = (timestampString) => {
  let date = new Date(parseInt(timestampString))
  return date.toDateString()
}


let mediaURL = true

let tweetArray = props.data.map(tweet => {

if (tweet.entities.media) {
  mediaURL = tweet.entities.media[0].media_url
} else {
  mediaURL = null
}

  return(
    <Tweet
      name={tweet.user.name}
      timestamp_ms={newDate(tweet.timestamp_ms)}
      text={tweet.text}
      retweet_count={tweet.retweet_count}
      favorite_count={tweet.favorite_count}
      screen_name={tweet.user.screen_name}
      image={tweet.user.profile_image_url}
      mediaURL={mediaURL}
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
