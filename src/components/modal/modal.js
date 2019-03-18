import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import FormEvent from '../form-event'
import './modal.css';
import 'antd/dist/antd.css'; 


export default class Modals extends Component {

  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render(){
    return (
      <div>
         <Button type="primary" onClick={this.showModal}>
              Edit Event
          </Button>
          <Modal
            className="modal-event"
            title="Edit Event"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[]}
            >
          
            <FormEvent/>
            
          </Modal>
      </div>
    )
  }

}