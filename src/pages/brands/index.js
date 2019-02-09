import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import BaseLayout from '../../layouts';

import data from './mock.json';
import './style.css';

let UniqSymbols = new Set(data.map(item => (item.title[0]).toUpperCase()));
UniqSymbols = Array.from(UniqSymbols);

export class BrandsPage extends Component {
  render() {
    const {
      match: {
        params: {
          char
        }
      }
    } = this.props;
    return (
      <BaseLayout>
        <div className="brand-menu">
          <h1 className="brand-menu__title">Бренды A-Z</h1>
          <div className="brand-menu__symbols">
            <span className="brand-menu-symbols__item">ТОП-БРЕНДЫ</span>
            {
              UniqSymbols.map(char => <NavLink to={`/brands/${char}`}
                                               className="brand-menu-symbols__item" key={char}
                                               activeClassName="brand-menu-symbols__item--active"
              >
                {char}
              </NavLink>)
            }
            <NavLink className="brand-menu-symbols__item" to="/brands">ВСЕ БРЕНДЫ</NavLink>
          </div>
          {char && <h2 className="brand-menu_current_symbol">{char}</h2>}
        </div>
        <div className="brand-items">
          {
            data && data
              .filter(item => !char || item.title[0].toUpperCase() === char)
              .map(item => <div className="brand-item">
                <NavLink to={`/brands/${item.slug}`} key={item.slug}>
                  {item.brand_logo_url &&
                  <img className="brand-item__image" src={item.brand_logo_url} alt={item.title}/>}
                  {!item.brand_logo_url && <h2 className="brand-item__title">{item.title}</h2>}
                </NavLink>
              </div>)
          }
        </div>
      </BaseLayout>
    );
  }
}

export default BrandsPage;
