import React from 'react'

const ImageSrc = (props) => {
  return (
    <div id="carouselImage">
      <img src={props.text} height={450} alt="" />
    </div>
  )
}

export default ImageSrc
