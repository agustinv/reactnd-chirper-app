import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTweet } from '../utils/helpers'

class Tweet extends Component {
  render () {
    const { tweet, id } = this.props
    if ( tweet === null ) {
      return <p> This tweet doesnt exist </p>
    }
    return (
      <li key={id}>

      </li>
    )
  }
}

function mapStateToProps ({authedUser, users, tweets}, { id }) {
  const tweet = tweets[id]
  const parentTweet = tweet ? tweets[tweet.replytingTo] : null

  return {
    authedUser,
    tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null
  }
}

export default connect(mapStateToProps)(Tweet)
