import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

import {isAuth} from '../../services';

class Navigation extends Component {
  render() {
    return (
      <nav className="nav-links">
        <NavLink to="/main" className="nav-links__item" activeClassName="nav-links__item--active">Главная</NavLink>
        <NavLink to="/brands" className="nav-links__item" activeClassName="nav-links__item--active">Бренды</NavLink>
        <NavLink to="/catalog" className="nav-links__item" activeClassName="nav-links__item--active">Каталог</NavLink>
        {!isAuth() ?
          <NavLink to="/login" className="nav-links__item" activeClassName="nav-links__item--active">Вход</NavLink>
          :
          <NavLink to="/personal" className="nav-links__item" activeClassName="nav-links__item--active">ЛК</NavLink>
        }
      </nav>
    );
  }
}

export default Navigation;
