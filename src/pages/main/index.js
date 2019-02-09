import React, {Component} from 'react';
import {Col, Row} from "antd";
import BaseLayout from '../../layouts';


export class MainPage extends Component {
  render() {
    return (
      <BaseLayout>
        <Row gutter={16}>
          <Col span={12}>
            hello
          </Col>
          <Col span={12}>
            World!
          </Col>
        </Row>
      </BaseLayout>
    );
  }
}

export default MainPage;
