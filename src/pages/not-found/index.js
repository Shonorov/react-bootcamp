import React, {Component} from 'react';
import BaseLayout from '../../layouts';
import {NavLink} from "react-router-dom";

export class NotFoundPage extends Component {
  render() {
    return (
      <BaseLayout>
        <section className="mt40 mb40">
          <div className="error__info">
            <h2 className="italic">Страница не найдена</h2>
            <div className="error__title">404</div>
            <p className="error__text">Вы перешли по неправильной ссылке или страница была удалена.</p>
            <NavLink to="/" className="link">Вернуться на главную</NavLink>
          </div>
        </section>
      </BaseLayout>
    );
  }
}

export default NotFoundPage;
