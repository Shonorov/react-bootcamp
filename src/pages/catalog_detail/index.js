import React, {Component} from 'react';
import BaseLayout from '../../layouts';

import data from '../catalog/mock.json';
import './style.css';
import {NavLink, Redirect} from "react-router-dom";
import { Carousel, Button } from 'antd';
import {formatMoney} from "accounting-js";


data.forEach(item => {
  item.lot = item && item.skuList && item.skuList[0] && item.skuList[0];
});

function myFromatMoney(value) {
  return formatMoney(value, { symbol: "₽ ", thousand: " ", precision: 0, format: "%v %s" })
}


export class CatalogDetailPage extends Component {
  render() {
    console.log(data);
    const {
      match: {
        params: {
          slug
        }
      }
    } = this.props;
    const currentElement = data.filter(item => item.slug === slug)[0];
    if(!currentElement){
      return <Redirect exact  to="/404" />;
    }

    return (
      <BaseLayout>
        <section className="mt40 mb40 catalog-detail">
          <h2 className="upcase">{currentElement.brand_name}</h2>
          <h3>{currentElement.title}</h3>
          <span className="price price--mini">{myFromatMoney(currentElement.lot && currentElement.lot.price_original || 0)}</span>
          <br/>
          <span className="label">{currentElement.lot && currentElement.lot.season}</span>
          <br/>
          <br/>
          <Carousel autoplay={true}>
              {
                currentElement.photos && currentElement.photos.map(photo => <img src={photo.small} alt={slug} className="catalog-detail-image"/>)
              }
          </Carousel>
          <br/>
          <Button icon="shopping-cart">В корзину</Button>
          <br/>
          <br/>
          <NavLink to="/catalog" className="link">Назад в каталог</NavLink>
        </section>
      </BaseLayout>
    );
  }
}

export default CatalogDetailPage;
