import React from 'react'
import PropTypes from 'prop-types'

export default function Video(props) {
  return (
    <div className='video'>
      <h2>{props.title}</h2>
      <div className='videoContainer'>
        <iframe
          src={props.url}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div>{props.author}</div>
      <hr />
      <div>
        View count: {props.viewCount}<br />
        Free: { props.free.toString() }
      </div>
    </div>
  )
}

Video.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  viewCount: PropTypes.number.isRequired,
  free: PropTypes.bool.isRequired,
}