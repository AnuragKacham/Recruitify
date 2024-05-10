import React from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="features1-section-title thq-flex-row">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="features1-text1 thq-heading-2">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="thq-button-outline features1-button1">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature1Title: 'Detailed Student Profiles',
  mainAction: 'Filter Students by Skills',
  feature1Description:
    'Access in-depth student profiles to make informed hiring decisions.',
  sectionTitle: 'Features',
  feature2Description:
    'Receive personalized recommendations for top students based on your hiring needs.',
  feature3Title: 'Flexible Plans',
  slogan: 'Unlock the potential of skilled students with RECRUITIFY',
  secondaryAction: 'Save Favorite Profiles',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1527710200112-665192dc1c22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI5NzQyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  sectionDescription:
    'Discover the key features of RECRUITIFY that make finding the perfect candidate a breeze.',
  feature3ImageAlt: 'Flexible Plans Image',
  feature3Description:
    'Choose from different plans tailored to your recruitment needs.',
  feature2ImageAlt: 'Recommendations for Top Students Image',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI5NzQyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: 'Recommendations for Top Students',
  feature1ImageAlt: 'Detailed Student Profiles Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1680458841952-d6d25be65b03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI5NzQyNHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features1.propTypes = {
  feature1Title: PropTypes.string,
  mainAction: PropTypes.string,
  feature1Description: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Title: PropTypes.string,
  slogan: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
}

export default Features1
