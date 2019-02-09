import React, {Component} from 'react';
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
import BaseLayout from '../../layouts';
import {NavLink} from "react-router-dom";

import {login} from '../../services';
import Api from "../../services/real-world";

import './style.css';

class LoginPageComponent extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Api.Auth.login(
          values.email,
          values.password
        )
          .then((data) => {
            if (data && data.user && data.user.token) {
              login(data.user.token);
            }
          })
          .catch(err => alert('ошибка'));
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <BaseLayout>
        <section className="mt40 mb40">
          <h1>Вход</h1>
          <br/>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [{required: true, message: 'Обязательное поле!'}],
              })(
                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Логин"/>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{required: true, message: 'Обязательное поле!'}],
              })(
                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                       placeholder="Пароль"/>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Запомнить меня</Checkbox>
              )}
              <NavLink className="login-form-forgot" to="">Забыли пароль?</NavLink>
              <Button type="primary" htmlType="submit" className="login-form-button">
                ВОЙТИ
              </Button>
              <NavLink to="/register">Регистрация</NavLink>
            </Form.Item>
          </Form>
        </section>
      </BaseLayout>
    );
  }
}

export const LoginPage = Form.create({name: 'login'})(LoginPageComponent);


export default LoginPage;
