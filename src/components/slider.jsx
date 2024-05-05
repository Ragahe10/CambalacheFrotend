import React from 'react'
import { Carousel } from 'react-bootstrap'

const Slider = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imagenes/slider-1.bmp"
          alt="First slide"
        />
        <Carousel.Caption>
        <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imagenes/slider-2.bmp"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imagenes/slider-3.bmp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider
