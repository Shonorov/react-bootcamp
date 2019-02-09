import React, {Component} from 'react';
import {
  Form, Icon, Input, Button,
} from 'antd';

import BaseLayout from '../../layouts';
import {NavLink} from "react-router-dom";
import {login} from "../../services";
import Api from "../../services/real-world";


export class RegisterPageComponent extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Api.Auth.register(
          values.username,
          values.email,
          values.password
        )
          .then((data) => {
            if(data && data.user && data.user.token){
              login(data.user.token);
            }
          })
          .catch(err => alert('ошибка'));
        // login('token');
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <BaseLayout>
        <section className="mt40 mb40">
          <h1>Регистрация</h1>
          <br/>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{required: true, message: 'Обязательное поле!'}],
              })(
                <Input placeholder="Имя"/>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [{required: true, message: 'Обязательное поле!'}],
              })(
                <Input placeholder="Почта"/>
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
              <Button type="primary" htmlType="submit" className="login-form-button upcase">
                Зарегистрироваться
              </Button>
            </Form.Item>
            <NavLink to="/login">Войти</NavLink>
          </Form>
        </section>
      </BaseLayout>
    );
  }
}

export const RegisterPage = Form.create({name: 'register'})(RegisterPageComponent);

export default RegisterPage;
