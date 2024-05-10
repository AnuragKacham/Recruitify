import React from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h4 className="hero9-text thq-heading-1">{props.heading1}</h4>
          <p className="hero9-text1 thq-body-large">{props.content1}</p>
          <div className="hero9-actions">
            <button className="thq-button-filled hero9-button">
              <span className="hero9-text2 thq-body-small">
                {props.action1}
              </span>
            </button>
            <button className="thq-button-outline hero9-button1">
              <span className="hero9-text3 thq-body-small">
                {props.action2}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  image1Alt: 'Skilled Students',
  image1Src:
    'https://images.unsplash.com/photo-1680458842419-473b514adbd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI5NzQyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  action1: 'Learn More',
  heading1: 'Connect',
  content1:
    'Find the perfect match for your team from our pool of talented students.',
  action2: 'Sign Up Now',
}

Hero9.propTypes = {
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action2: PropTypes.string,
}

export default Hero9
