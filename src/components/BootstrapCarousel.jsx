import React from 'react';
import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function BootstrapCarousel({ items, type }) {
  const items1 = [];
  const items2 = [];

  items.forEach((item, index) => {
    if (index % 2 === 0) {
      item.indexObj = index;
      items1.push(item);
    } else {
      item.indexObj = index;
      items2.push(item);
    }
  });

  return (
    <div>
      <Carousel>
        {items1.map((item, index) => (
          <Carousel.Item
            key={ item[`str${type}`] }
            style={ { width: '100vh' } }
          >
            <div style={ { display: 'flex' } }>

              <div
                style={ { width: '30%' } }
                key={ item[`str${type}`] }
                data-testid={ `${item.indexObj}-recomendation-card` }
              >
                <h3
                  data-testid={ `${item.indexObj}-recomendation-title` }
                >
                  { item[`str${type}`] }
                </h3>
                <img
                  style={ { width: '75%' } }
                  src={ item[`str${type}Thumb`] }
                  alt={ item[`str${type}`] }
                />
              </div>

              <div
                style={ { width: '30%' } }
                key={ items2[index][`str${type}`] }
                data-testid={ `${items2[index].indexObj}-recomendation-card` }
              >
                <h3
                  data-testid={ `${items2[index].indexObj}-recomendation-title` }
                >
                  { items2[index][`str${type}`] }
                </h3>
                <img
                  style={ { width: '75%' } }
                  src={ items2[index][`str${type}Thumb`] }
                  alt={ items2[index][`str${type}`] }
                />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

BootstrapCarousel.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  type: PropTypes.string.isRequired,
};
