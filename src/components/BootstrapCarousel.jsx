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
      <Carousel interval={ null }>
        {items1.map((item, index) => (
          <Carousel.Item key={ item[`str${type}`] }>
            <div
              key={ item[`str${type}`] }
              data-testid={ `${item.indexObj}-recomendation-card` }
            >
              <img src={ item[`str${type}Thumb`] } alt={ item[`str${type}`] } />
              <h3
                data-testid={ `${item.indexObj}-recomendation-title` }
              >
                { item[`str${type}`] }
              </h3>
            </div>

            <div
              key={ items2[index][`str${type}`] }
              data-testid={ `${items2[index].indexObj}-recomendation-card` }
            >
              <img
                src={ items2[index][`str${type}Thumb`] }
                alt={ items2[index][`str${type}`] }
              />
              <h3
                data-testid={ `${items2[index].indexObj}-recomendation-title` }
              >
                { items2[index][`str${type}`] }
              </h3>
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
