import React from 'react';
import Modal from './Modal';

export default class PortalsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

  handleShow = () => {
    this.setState({ showModal: true });
  };

  handleHide = () => {
    this.setState({ showModal: false });
  };

  handleClick = (e) => {
    if (e.target.className === 'modal')
    console.log('即使不是实际DOM的父子关系, 但是还是会冒泡到 React Element 父级别');
  }

  render() {
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div>With a portal, we can render content into a different part of the DOM, as if it were any other React child.</div>
          This is being rendered inside the #modal-container div.
          <button onClick={this.handleHide}>Hide modal</button>
        </div>
      </Modal>
    ) : null;

    return (
      <div className="app" onClick={this.handleClick}>
        This div has overflow: hidden.
        <button onClick={this.handleShow}>Show modal</button>
        {modal}
      </div>
    );
  }
}
