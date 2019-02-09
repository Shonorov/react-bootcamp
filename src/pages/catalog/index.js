import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {formatMoney} from 'accounting-js';
import BaseLayout from '../../layouts';

import data from './mock.json';
import './style.css';

data.forEach(item => {
  item.lot = item && item.skuList && item.skuList[0] && item.skuList[0];
});

function myFromatMoney(value) {
  return formatMoney(value, { symbol: "₽ ", thousand: " ", precision: 0, format: "%v %s" })
}

export class CatalogPage extends Component {
  render() {
    console.log(data);
    return (
      <BaseLayout>
        <section className="mt40 mb40">
          <h1>Каталог</h1>
          <div className="catalog-filter">

          </div>
          <div className="catalog-list">
            {
              data && data.reverse().map(item => <NavLink to={`/catalog/${item.slug}`} className="catalog-list-item">
                  <img src={item.photos[0].small} alt={item.title} className="catalog-list-item__image"/>
                  <h2 className="upcase">{item.brand_name}</h2>
                  <h3>{item.title}</h3>
                  <span className="price price--mini">{myFromatMoney(item.lot && item.lot.price_original || 0)}</span>
                  <br/>
                  <span className="label">{item.lot && item.lot.season}</span>
              </NavLink>)
            }
          </div>
        </section>
      </BaseLayout>
    );
  }
}

export default CatalogPage;
