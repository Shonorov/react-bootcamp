import React, {Component} from 'react';
import {connect} from 'react-redux';
import './style.css';

class LoadingComponent extends Component {
  render() {
    const {loading} = this.props;
    if (loading)
      return (
        <div className="loading">
          <span className="loading__content">Загрузка...</span>
        </div>
      );
    return null;
  }
}

export const Loading = connect((state) => {
  console.log(state);
  return {
    loading: state.loading
  };
})(LoadingComponent);

export default Loading;
