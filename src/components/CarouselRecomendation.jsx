import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselRecomendation({ drink }) {
  console.log(drink[0]);
  console.log(drink);
  return (

    <Carousel>
      <Carousel.Item>
        <div>

          <img
            className="d-block w-100"
            src={ drink[0].strDrinkThumb }
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
        <div>

          <img
            className="d-block w-100"
            src={ drink[1].strDrinkThumb }
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div>

          <img
            className="d-block w-100"
            src={ drink[2].strDrinkThumb }
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
        <div>

          <img
            className="d-block w-100"
            src={ drink[3].strDrinkThumb }
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

    </Carousel>
  );
}
