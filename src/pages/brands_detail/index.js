import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import BaseLayout from '../../layouts';

import './style.css';

export class BrandsDetailPage extends Component {
  render() {

    return (
      <BaseLayout>
        <section className="mt40 mb40">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis deleniti iusto minus nulla odit rem, velit. Ad alias aliquam beatae mollitia optio. Ad commodi cupiditate facilis labore rem, tempore?</p>
          <br/>
          <NavLink to="/brands" className="link">Все бренды</NavLink>
        </section>
      </BaseLayout>
    );
  }
}

export default BrandsDetailPage;
