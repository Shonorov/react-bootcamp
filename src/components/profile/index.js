import React, {Component, Fragment} from 'react';
import './style.css';
import {Button, Form, Icon, Input} from "antd";
import Api from "../../services/real-world";
import {getImage} from "../../services/image-generator";


class ProfileComponent extends Component {
  state = {
    data: null,
    isLoading: false,
    error: false,
    newImage: null
  };


  componentDidMount() {
    this.setState({
      data: null,
      isLoading: true,
      error: false,
    });
    const {username} = this.props;
    Api.Profile.get(username)
      .then((data) => {
        this.setState({
          data: data,
          isLoading: false,
          error: false,
        });
      })
      .catch(err => {
        alert('ошибка');
        this.setState({
          data: null,
          isLoading: false,
          error: true,
        });
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Api.Auth.save(values)
          .then((data) => {
            alert('Обновлено!');
          })
          .catch(err => alert('ошибка'));
        // login('token');
        console.log('Received values of form: ', values);
      }
    });
  };

  onChangeImage = () => {
    const newImage = getImage();
    this.setState({newImage: newImage});
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    const {data, newImage} = this.state;
    console.log(data);
    return (
      <div className="profile">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('image', {
              initialValue: newImage || data && data.profile && data.profile.image,
              rules: [{required: true, message: 'Обязательное поле!'}],
            })(
              <div onClick={this.onChangeImage}>
                <img src={newImage || data && data.profile && data.profile.image} alt="" className="mt40 mb40"/>
                <Input placeholder="Имя" hidden />
              </div>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('username', {
              initialValue: data && data.profile && data.profile.username,
              rules: [{required: true, message: 'Обязательное поле!'}],
            })(
              <Input placeholder="Имя"/>
            )}
          </Form.Item>
          {/*<Form.Item>*/}
            {/*{getFieldDecorator('password', {*/}
              {/*rules: [{required: true, message: 'Обязательное поле!'}],*/}
            {/*})(*/}
              {/*<Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"*/}
                     {/*placeholder="Пароль"/>*/}
            {/*)}*/}
          {/*</Form.Item>*/}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button upcase">
              Изменить
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export const Profile = Form.create({name: 'profile'})(ProfileComponent);

export default Profile;
