import React, {Component} from 'react';
import {Button} from 'antd';

import Profile from '../../components/profile';
import BaseLayout from '../../layouts';
import {login, logout} from '../../services';
import Api from "../../services/real-world";


export class PersonalPage extends Component {
  state = {
    data: null,
    isLoading: false,
    error: false
  };

  componentDidMount() {
    this.setState({
      data: null,
      isLoading: true,
      error: false,
    });
    Api.Auth.current()
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

  render() {
    const {data = {}, error, isLoading} = this.state;

    if(isLoading || !data){
      return 'Loading';
    }

    const username = data && data.user && data.user.username || "";
    return (
      <BaseLayout>
        <section className="mt40 mb40">
          <h1>Добро пожаловать в тайную команту!</h1>
          {username && <Profile username={username}/>}
          <Button onClick={logout}>Выход</Button>
        </section>
      </BaseLayout>
    );
  }
}

export default PersonalPage;
