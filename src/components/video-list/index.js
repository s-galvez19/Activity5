import React from 'react'
import PropTypes from 'prop-types'
import Video from './video'

import './styles.css'

export default function VideoList(props) {
  return (
    <ul className='videos'>
        {
          props.videos.map(video =>
            <li key={video.url}>
              <Video {...video}/>
            </li>)
        }
      </ul>
  )
}

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    viewCount: PropTypes.number.isRequired,
    free: PropTypes.bool.isRequired,
  }))
}