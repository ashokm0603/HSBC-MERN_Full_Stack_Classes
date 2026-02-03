import Carousel from 'react-bootstrap/Carousel';

import ImageSrc from './ImageSrc';
function ImagesInterval() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <ImageSrc text="https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/upi-credit-cards-v1.png" />
        <Carousel.Caption id='image-container'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <ImageSrc text="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD5gxryLLrnWT19ptA0tMdoJkaxShuYgC3Jg&s" />
        <Carousel.Caption  id='image-container'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImageSrc text="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRRXJh8UiFIMzIzkotm7ytciFMRqXJLS1WMQ&s" />
        <Carousel.Caption  id='image-container'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImagesInterval;