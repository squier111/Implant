import React, { Component } from 'react';
import {
  Form, Select, Input , Radio, Button, Upload, Icon,
  Row, Col, Calendar 
} from 'antd';

import './form-event.css';
import 'antd/dist/antd.css'; 

const { TextArea } = Input;

class FormE extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  onPanelChange(value, mode) {
    console.log(value, mode);
  }
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const { Option } = Select;
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>

        <Row gutter={4}>
          <Col className="gutter-row" span={14}>
            <div className="gutter-box">
              <Form.Item
                label="Radio.Group"
              >
                {getFieldDecorator('radio-group')(
                  <Radio.Group>
                    <Radio value="a">item 1</Radio>
                    <Radio value="b">item 2</Radio>
                    <Radio value="c">item 3</Radio>
                  </Radio.Group>
                )}
              </Form.Item>
              <Form.Item
                label="Event Title"
              >
                <Input placeholder="Event Title" />
              </Form.Item>
          
              <Form.Item
                label="Channel"
                hasFeedback
                >
                {getFieldDecorator('select', {
                  rules: [
                    { required: true, message: 'Default channel' },
                  ],
                })(
                  <Select placeholder="Please select a country">
                    <Option value="china">China</Option>
                    <Option value="usa">U.S.A</Option>
                  </Select>
                )}
              </Form.Item>

              <Form.Item
                label="Event Description"
              >
                <TextArea rows={4} />,
              </Form.Item>


              <Form.Item
                label="Channel"
                hasFeedback
                >
                {getFieldDecorator('select', {
                  rules: [
                    { required: true, message: 'Restriction' },
                  ],
                })(
                  <Select placeholder="Free event (no subscription needed)">
                    <Option value="china">China</Option>
                    <Option value="usa">U.S.A</Option>
                  </Select>
                )}
              </Form.Item>


              <Form.Item
                label="Event Tags"
              >
                <Input placeholder="Event Tags" />
              </Form.Item>
            </div>
          </Col>
          <Col className="gutter-row" span={10}>
            <div className="gutter-box">
              <Form.Item
                label="Dragger"
              >
                <div className="dropbox">
                  {getFieldDecorator('dragger', {
                    valuePropName: 'fileList',
                    getValueFromEvent: this.normFile,
                  })(
                    <Upload.Dragger name="files" action="/upload.do">
                      <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                      </p>
                      <p className="ant-upload-text">Click or drag file to this area to upload</p>
                      <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                    </Upload.Dragger>
                  )}
                </div>
              </Form.Item>
              <Calendar className="calendar" fullscreen={false} onPanelChange={this.onPanelChange} />
            </div>
          </Col>
        </Row>
        <Row gutter={4}>
          <Col className="gutter-row" span={24}> 
              <Button className="submit-btn" type="primary" htmlType="submit">Create Event</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const FormEvent = Form.create({ 
  name: 'validate_other',
  labelAlign:'left'
})(FormE);

export default FormEvent;